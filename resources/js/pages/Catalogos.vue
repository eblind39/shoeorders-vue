<template>
    <div>
        <div class="card">
            <div class="card-header"><h4>Mantenimiento de catálogos</h4></div>
            <div class="card-body">
                <!-- toolbar -->
                <b-card>
                    <b-button-toolbar aria-label="">
                        <b-button-group size="lg" class="mx-1">
                            <b-button @click="mostrarModal('C')" variant="secondary" ref="btnAddChld">
                                <span style="font-size: 1em; color: #F4E939;">
                                    <font-awesome-icon icon="star-of-life" />
                                </span>
                            </b-button>
                            <b-button @click="mostrarModal('CNR')" variant="secondary">
                                <span style="font-size: 1em; color: #F4E939;">
                                    <font-awesome-icon icon="dice" />
                                </span>
                            </b-button>
                        </b-button-group>
                        <b-button-group size="lg" class="mx-1">
                            <b-button @click="mostrarModal('U')" variant="secondary">
                                <span style="font-size: 1em; color: #CFFF68;">
                                    <font-awesome-icon icon="edit" />
                                </span>
                            </b-button>
                            <b-button @click="mostrarModal('R')" variant="secondary">
                                <span style="font-size: 1em; color: #64B1F9;">
                                    <font-awesome-icon icon="eye" />
                                </span>
                            </b-button>
                            <b-button @click="mostrarModal('D')" variant="secondary">
                                <span style="font-size: 1em; color: #F96464;">
                                    <font-awesome-icon icon="minus-circle" />
                                </span>
                            </b-button>
                        </b-button-group>
                    </b-button-toolbar>
                </b-card>
                <!-- opciones de mantenimiento -->
                <catalogo-crud
                    :showModalCat.sync="showModalCat" 
                    :showModalDelCat.sync="showModalDelCat"
                    :bolHideCatPadre.sync="bolHideCatPadre"
                    :resMsgDelCat.sync="resMsgDelCat"
                    :modoEdicion.sync="modoEdicion"
                    :currentNodeId.sync="currentNodeId" 
                    :currentNodeVal.sync="currentNodeVal" 
                    :jsonNewNode.sync="jsonNewNode">
                </catalogo-crud>
                <!-- opciones de menu registradas -->
                <b-card class="mt-2">
                    <tree ref="treeCats" :data="treeData" :options="optnsTree">
                        <span class="tree-text" slot-scope="{ node }">
                            <template v-if="node.data.inode">
                                <span style="font-size: 1em; color: #74A9D4;">
                                    <font-awesome-icon v-show="!node.data.expanded" icon="folder" />
                                    <font-awesome-icon v-show="node.data.expanded" icon="folder-open" />
                                </span>
                                {{ node.text }}
                            </template>
                            <template v-else>
                                <span style="font-size: 1em; color: #8c9cab;">
                                    <font-awesome-icon icon="file" />
                                </span>
                                {{ node.text }}
                            </template>
                        </span>
                    </tree>
                </b-card>
            </div>
        </div>
        <b-modal ref="modalNoDelete" ok-only ok-title="Aceptar">
            <label>No es posible eliminar un catálogo que tiene dependencias</label>
        </b-modal>
    </div>
</template>
<script>
    import CatalogoCrud from './CatalogoCRUD.vue';
    import { GET_CATALOGOS_TREE } from '../graphql/catalogoGetTree.gql';

    export default {
        components: {
            CatalogoCrud
        },
        mounted() {
            var that = this;
            this.$refs.treeCats.$on('node:clicked', function (node) {
                that.currentNode = node;
                that.currentNodeId = node.id;
                that.currentNodeVal = node.text;
            });
            this.$refs.treeCats.$on('node:expanded', function (node, newnode) {
                node.data.expanded = true;
            });
            this.$refs.treeCats.$on('node:collapsed', function (node, newnode) {
                node.data.expanded = false;
            });
            this.$refs.treeCats.$on('node:added', function (node, newnode) {
                // console.log(newnode);
            });
            this.$refs.treeCats.$on('tree:mounted', function (treecmp) {
                that.getTreeData(null);
            });
            this.$refs.btnAddChld.disabled = true;
        },
        data() {
            return {
                showModalCat: false,
                showModalDelCat: false,
                bolHideCatPadre: true,
                resMsgDelCat: '',
                modoEdicion: '',
                treeData: [],
                currentNode: null,
                currentNodeId: null,
                currentNodeVal: null,
                jsonNewNode: {},
                optnsTree: {
                    keyboardNavigation: true,
                    propertyNames: {
                        'text': 'label'
                    },
                },
            }
        },
        computed: {
            createChldNodeImg() {
                return `${window.cdn_url || ''}images/children_node.svg`;
            },
        },
        watch: {
            jsonNewNode: function(newval, oldval) {
                if ((this.modoEdicion=='C' || this.modoEdicion=='CNR') && Object.keys(newval).length > 0) {
                    var jstmp = {
                        id: newval.id_catalogo,
                        label: newval.valor,
                        inode: false,
                        esloadedchlds: false
                    };
                    if (this.modoEdicion=='CNR') this.nuevoRoot(jstmp);
                    if (this.modoEdicion=='C') this.addChildNode(this.currentNode, jstmp);
                }
                if (this.modoEdicion=='U' && Object.keys(newval).length > 0) {
                    this.currentNode.id = newval.id_catalogo;
                    this.currentNode.text = newval.valor;
                    this.data = {
                        inode: newval.inode,
                        esloadedchlds: false,
                    }
                }
            },
            resMsgDelCat: function(newval, oldval) {
                if (newval=='OK') {
                    const index = this.treeData.findIndex(x => x.id === this.currentNodeId);
                    if (index !== undefined) this.treeData.splice(index, 1);
                    let nodoPadre = this.currentNode.parent;
                    this.$refs.treeCats.remove(this.currentNode);
                    this.currentNode = null;
                    this.currentNodeId = null;
                    this.currentNodeVal = null;
                    this.resMsgDelCat = '';
                    nodoPadre.data.inode = nodoPadre.hasChildren();
                }
            },
            currentNode: function(newval, oldval) {
                this.$refs.btnAddChld.disabled = (newval==null);
            },
        },
        methods: {
            async getTreeData(idPadre, nodePadre) {
                let catstree = await this.$apollo.query({ query: GET_CATALOGOS_TREE, variables: { id: idPadre }, fetchPolicy: 'network-only' });
                if (typeof catstree.data != 'undefined') {
                    var that = this, nodeAdded = null;
                    if (catstree.data.catalogosTree.length==0) return;
                    catstree.data.catalogosTree.forEach((item, index) => {
                        if (idPadre == null) nodeAdded = that.nuevoRoot(item);
                        else nodeAdded = that.addChildNode(nodePadre, item);
                        if (nodeAdded.parent != null) 
                            if (nodeAdded.data.inode) this.getTreeData(nodeAdded.parent.id, nodeAdded);
                            else return;
                        else
                            if (item.inode) this.getTreeData(item.id, nodeAdded);
                            else return;
                    });
                } else {
                    return;
                }
                if (typeof nodePadre != 'undefined' && nodePadre.hasChildren()) nodePadre.expand(); //nodePadre.data.esloadedchlds = true;
                return;
            },
            addChildNode(node, item) {
                // add a new children item
                let nuevoNodo = null;
                nuevoNodo = node.append(this.getJSONDataNode(item));
                node.data.inode = true;
                node.expand();
                node.data.expanded = false; // cambiar esto si se desea animar el arbol al inicio, con sus nodos padres desplegados
                this.treeData.push(this.getJSONDataNode(item));
                return nuevoNodo;
            },
            nuevoRoot(item) {
                // add a new root item
                this.treeData.push(this.getJSONDataNode(item));
                return this.$refs.treeCats.append(this.getJSONDataNode(item));
            },
            getJSONDataNode(item) {
                return {
                    id: item.id,
                    text: item.label,
                    data: {
                        inode: item.inode,
                        esloadedchlds: false,
                        expanded: false,
                    },
                    state: { selected: false }
                }
            },
            mostrarModal(edmode) {
                if (edmode=='D') {
                    if (this.currentNode.hasChildren()) {
                        this.$refs.modalNoDelete.show();
                        return;
                    }
                    this.showModalDelCat = true;
                    this.showModalCat = false;
                } else {
                    if (this.treeData.length==0 || edmode=='CNR') {
                        this.bolHideCatPadre=true;
                        this.currentNode = null;
                        this.currentNodeId = null;
                        this.currentNodeVal = null;
                    } else this.bolHideCatPadre=false;
                    // if (edmode=='CNR') {
                    //     this.bolHideCatPadre=true;
                    //     this.currentNode = null;
                    //     this.currentNodeId = null;
                    //     this.currentNodeVal = null;
                    // }
                    this.modoEdicion = edmode;
                    this.showModalDelCat = false;
                    this.showModalCat = true;
                }
            },
        }
    }
</script>