<template>
    <div>
        <div class="card">
            <div class="card-header"><h4>Mantenimiento de opciones de menú</h4></div>
            <div class="card-body">
                <!-- toolbar -->
                <b-card>
                    <b-button-toolbar aria-label="">
                        <b-button-group size="lg" class="mx-1">
                            <b-button @click="mostrarModal('C')" variant="secondary">
                                <span style="font-size: 1em; color: #F4E939;">
                                    <font-awesome-icon icon="star-of-life" />
                                </span>
                            </b-button>
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
                <opcion-menu-crud
                    :showModalOptMnu.sync="showModalOptMnu" 
                    :showModalDelOptMnu.sync="showModalDelOptMnu"
                    :resMsgDelOptMnu.sync="resMsgDelOptMnu"
                    :modoEdicion.sync="modoEdicion"
                    :currentNodeId.sync="currentNodeId" 
                    :currentNodeDesc.sync="currentNodeDesc" 
                    :jsonNewNode.sync="jsonNewNode">
                </opcion-menu-crud>
                <!-- opciones de menu registradas -->
                <b-card class="mt-2">
                    <tree ref="treeOptsMnu" :data="treeData" :options="optnsTree">
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
            <label>No es posible eliminar una opción de menú que tiene dependencias</label>
        </b-modal>
    </div>
</template>
<script>
    import OpcionMenuCrud from './SecOpcionMenuCRUD.vue';
    import { GET_SEC_OPTSMENU_TREE } from '../graphql/secOpcionMenuGetTree.gql';

    export default {
        components: {
            OpcionMenuCrud
        },
        mounted() {
            var that = this;
            this.$refs.treeOptsMnu.$on('node:clicked', function (node) {
                // if (node.data.inode) {
                //     that.getTreeData(node.id, node);
                // }
                that.currentNode = node;
                that.currentNodeId = node.id;
                that.currentNodeDesc = node.text;
                //console.log(that.currentNode);
            });
            this.$refs.treeOptsMnu.$on('node:expanded', function (node, newnode) {
                node.data.expanded = true;
            });
            this.$refs.treeOptsMnu.$on('node:collapsed', function (node, newnode) {
                node.data.expanded = false;
            });
            this.$refs.treeOptsMnu.$on('node:added', function (node, newnode) {
                // console.log(newnode);
            });
            this.$refs.treeOptsMnu.$on('tree:mounted', function (treecmp) {
                that.getTreeData(null);
            });
        },
        data() {
            return {
                showModalOptMnu: false,
                showModalDelOptMnu: false,
                resMsgDelOptMnu: '',
                modoEdicion: '',
                treeData: [],
                currentNode: null,
                currentNodeId: null,
                currentNodeDesc: null,
                jsonNewNode: {},
                optnsTree: {
                    keyboardNavigation: true,
                    propertyNames: {
                        'text': 'label'
                    },
                },
            }
        },
        watch: {
            jsonNewNode: function(newval, oldval) {
                if (this.modoEdicion=='C' && Object.keys(newval).length > 0) {
                    var jstmp = {
                        id: newval.id_opcion_menu,
                        label: newval.descripcion,
                        icon: newval.icon_fa,
                        esfrmreg: newval.es_form_registro,
                        inode: false,
                        esloadedchlds: false
                    };
                    this.addChildNode(this.currentNode, jstmp);
                }
                if (this.modoEdicion=='U' && Object.keys(newval).length > 0) {
                    this.currentNode.id = newval.id_opcion_menu;
                    this.currentNode.text = newval.descripcion;
                    this.icon = newval.icon_fa;
                    this.data = {
                        esfrmreg: newval.es_form_registro,
                        inode: newval.inode,
                        esloadedchlds: false,
                    }
                }
            },
            resMsgDelOptMnu: function(newval, oldval) {
                if (newval=='OK') {
                    let nodoPadre = this.currentNode.parent;
                    this.$refs.treeOptsMnu.remove(this.currentNode);
                    this.currentNode = null;
                    this.currentNodeId = null;
                    this.currentNodeDesc = null;
                    this.resMsgDelOptMnu = '';
                    nodoPadre.data.inode = nodoPadre.hasChildren();
                }
            },
        },
        methods: {
            // async getTreeData(idPadre, nodePadre) {
            //     if (typeof nodePadre != 'undefined' && nodePadre.data.esloadedchlds) return;
            //     let optsmnutree = await this.$apollo.query({ query: GET_SEC_OPTSMENU_TREE, variables: { id: idPadre } });
            //     if (typeof optsmnutree.data != 'undefined') {
            //         var that = this;
            //         optsmnutree.data.secOpcionesMenuTree.forEach((item, index) => {
            //             if (idPadre == null) that.nuevoRoot(item);
            //             else that.addChildNode(nodePadre, item);
            //         });
            //     }
            //     if (typeof nodePadre != 'undefined') nodePadre.data.esloadedchlds = true;
            // },
            async getTreeData(idPadre, nodePadre) {
                let optsmnutree = await this.$apollo.query({ query: GET_SEC_OPTSMENU_TREE, variables: { id: idPadre }, fetchPolicy: 'network-only' });
                if (typeof optsmnutree.data != 'undefined') {
                    var that = this, nodeAdded = null;
                    if (optsmnutree.data.secOpcionesMenuTree.length==0) return;
                    optsmnutree.data.secOpcionesMenuTree.forEach((item, index) => {
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
                node.data.expanded = true;
                return nuevoNodo;
            },
            nuevoRoot(item) {
                // add a new root item
                return this.$refs.treeOptsMnu.append(this.getJSONDataNode(item));
            },
            getJSONDataNode(item) {
                return {
                    id: item.id,
                    text: item.label,
                    icon: item.icon,
                    data: {
                        esfrmreg: item.esfrmreg,
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
                    this.showModalDelOptMnu = true;
                    this.showModalOptMnu = false;
                } else {
                    this.modoEdicion = edmode;
                    this.showModalDelOptMnu = false;
                    this.showModalOptMnu = true;
                }
            }
        }
    }
</script>