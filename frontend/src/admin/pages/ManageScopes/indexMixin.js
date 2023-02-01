import FileSaver from 'file-saver';

export default {
  data: () => ({
    pickedItems: [],
    selectedItem: null,
    idsToDelete: [],
    tblLoading: false,
    dialog: {
      create: false,
      detail: false,
      update: false,
      delete: false,
      import: false
    },
    querySilent: true,
    tblConfig: {
      footerProps: {
        showFirstLastPage: true,
        'items-per-page-options': [10, 20, 50, 100, -1]
      },
      showSelect: true,
      text: {
        loading: 'Loading ...',
        noItem: 'No item found'
      },
    },
    tblOptions: {}
  }),
  computed: {
    listItems() {
      return this.items
    },
    getIndexOfItem() {
      return item => {
        let pageOffset = this.tblPagination ? (this.tblPagination.current_page - 1) * this.tblPagination.per_page : 0
        return pageOffset + this.items.indexOf(item) + 1
      }
    },
    queryConf() {
      return {
        options: this.tblOptions,
        searchWith: this.searchWith,
        querySilent: this.querySilent
      }
    }
  },
  methods: {
    onClickRow($event, row) {
      console.log('$event', $event);
      console.log('row', row);
    },

    onClickNew() {
      this.dialog.create = true;
    },

    onClickImport() {
      this.dialog.import = true;
    },

    onClickExport() {
      this.exportListItems({
        ...this.queryConf,
        querySilent: false,
        searchFields: this.searchFields,
      }).then(res => {
        let fileName = res.headers && res.headers['content-disposition'] ? res.headers['content-disposition'].replace('attachment; filename=', '') : null;
        if (fileName) FileSaver.saveAs(res.data, fileName);
        else FileSaver.saveAs(res.data);
      }).catch(err => {
        console.log('Export fail: ', err.message)
      })
    },
    /**
     * open confirm box for delete 1 item
     * @param props
     */
    onClickDelete(props) {
      this.dialog.delete = true;
      this.idsToDelete = [props.item.id];
    },

    onClickEdit(props) {
      this.selectedItem = props.item;
      this.dialog.update = true;
    },

    onClickDetail(props) {
      this.selectedItem = props.item;
      this.dialog.detail = true;
    },

    /**
     * open confirm box for delete multi item
     */
    onClickDeleteAll() {
      this.dialog.delete = true;
      this.idsToDelete = this.pickedItems.map(i => i.id);
    },
    /**
     * callback after created
     */
    onCreated() {
      this.dialog.create = false;
      this.doSearch();
    },
    /**
     * callback after updated
     */
    onUpdated() {
      this.dialog.update = false;
      this.doSearch();
    },
    /**
     * callback after delete items
     */
    onDeleted() {
      this.dialog.delete = false;
      this.idsToDelete = [];
      this.doSearch();
    },
    /**
     * callback after import items
     */
    onImported() {
      this.dialog.import = false;
      this.doSearch();
    },

    doSearch() {
      this.pickedItems = [];
      this.selectedItem = null;
      this.tblLoading = true
      this.getListItems({
        ...this.queryConf,
        searchFields: this.searchFields,
      }).then(res => {
        if (this.tblOptions.page > res.data.total_pages) this.tblOptions.page = res.data.total_pages;
      }).finally(() => {
        this.tblLoading = false
      });
    },
  },
  watch: {
    'queryConf': {
      handler() {
        this.doSearch();
      },
      deep: true
    },
  }
}
