  (function() {
      var viz = {
          // id: "transposed_table",      // id is only necessary for legacy custom visualizations
          // label: "Transposed Table",   // label is only necessary for legacy custom visualizations
          
          // Choose a color - one of our options
            options: {
              theme_color: {
                type: 'string',
                label: 'Theme Main Color',
                section: 'Style',
                placeholder: 'blue',
                default: 'blue'
              }
            },
        
        
          // Set up the initial state of the visualization
          create: function(element, config) {
              // initialize a div to place the table
              var css = element.innerHTML = `<div id="transposed_table"></div>`;

              // append css from tabulator
              // "simple" theme
              // $('head').append('<style type="text/css">.tabulator{position:relative;background-color:#fff;overflow:hidden;font-size:14px;text-align:left;transform:translatez(0)}.tabulator[tabulator-layout=fitDataFill] .tabulator-tableHolder .tabulator-table{min-width:100%}.tabulator.tabulator-block-select{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabulator .tabulator-header{width:100%;border-bottom:1px solid #999;color:#555;font-weight:700;white-space:nowrap;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator .tabulator-header,.tabulator .tabulator-header .tabulator-col{position:relative;box-sizing:border-box;background-color:#fff;overflow:hidden}.tabulator .tabulator-header .tabulator-col{display:inline-block;border-right:1px solid #ddd;text-align:left;vertical-align:bottom}.tabulator .tabulator-header .tabulator-col.tabulator-moving{position:absolute;border:1px solid #999;background:#e6e6e6;pointer-events:none}.tabulator .tabulator-header .tabulator-col .tabulator-col-content{box-sizing:border-box;position:relative;padding:4px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title{box-sizing:border-box;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-title-editor{box-sizing:border-box;width:100%;border:1px solid #999;padding:1px;background:#fff}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-arrow{display:inline-block;position:absolute;top:9px;right:8px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #bbb}.tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{position:relative;display:-ms-flexbox;display:flex;border-top:1px solid #ddd;overflow:hidden}.tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols .tabulator-col:last-child{margin-right:-1px}.tabulator .tabulator-header .tabulator-col:first-child .tabulator-col-resize-handle.prev{display:none}.tabulator .tabulator-header .tabulator-col.ui-sortable-helper{position:absolute;background-color:#e6e6e6!important;border:1px solid #ddd}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter{position:relative;box-sizing:border-box;margin-top:2px;width:100%;text-align:center}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter textarea{height:auto!important}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter svg{margin-top:3px}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter input::-ms-clear{width:0;height:0}.tabulator .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title{padding-right:25px}.tabulator .tabulator-header .tabulator-col.tabulator-sortable:hover{cursor:pointer;background-color:#e6e6e6}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-arrow{border-top:none;border-bottom:6px solid #bbb}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=asc] .tabulator-col-content .tabulator-arrow{border-top:none;border-bottom:6px solid #666}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=desc] .tabulator-col-content .tabulator-arrow{border-top:6px solid #666;border-bottom:none}.tabulator .tabulator-header .tabulator-frozen{display:inline-block;position:absolute;z-index:1}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-left{border-right:2px solid #ddd}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-right{border-left:2px solid #ddd}.tabulator .tabulator-header .tabulator-calcs-holder{box-sizing:border-box;min-width:200%;background:#f2f2f2!important;border-top:1px solid #ddd;border-bottom:1px solid #999;overflow:hidden}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row{background:#f2f2f2!important}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-header .tabulator-frozen-rows-holder{min-width:200%}.tabulator .tabulator-header .tabulator-frozen-rows-holder:empty{display:none}.tabulator .tabulator-tableHolder{position:relative;width:100%;white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch}.tabulator .tabulator-tableHolder:focus{outline:none}.tabulator .tabulator-tableHolder .tabulator-placeholder{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}.tabulator .tabulator-tableHolder .tabulator-placeholder[tabulator-render-mode=virtual]{position:absolute;top:0;left:0;height:100%}.tabulator .tabulator-tableHolder .tabulator-placeholder span{display:inline-block;margin:0 auto;padding:10px;color:#000;font-weight:700;font-size:20px}.tabulator .tabulator-tableHolder .tabulator-table{position:relative;display:inline-block;background-color:#fff;white-space:nowrap;overflow:visible;color:#333}.tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs{font-weight:700;background:#f2f2f2!important}.tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-top{border-bottom:2px solid #ddd}.tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-bottom{border-top:2px solid #ddd}.tabulator .tabulator-col-resize-handle{position:absolute;right:0;top:0;bottom:0;width:5px}.tabulator .tabulator-col-resize-handle.prev{left:0;right:auto}.tabulator .tabulator-col-resize-handle:hover{cursor:ew-resize}.tabulator .tabulator-footer{padding:5px 10px;border-top:1px solid #999;background-color:#fff;text-align:right;color:#555;font-weight:700;white-space:nowrap;-ms-user-select:none;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator .tabulator-footer .tabulator-calcs-holder{box-sizing:border-box;width:calc(100% + 20px);margin:-5px -10px 5px;text-align:left;background:#f2f2f2!important;border-bottom:1px solid #fff;border-top:1px solid #ddd;overflow:hidden}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row{background:#f2f2f2!important}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-footer .tabulator-calcs-holder:only-child{margin-bottom:-5px;border-bottom:none}.tabulator .tabulator-footer .tabulator-pages{margin:0 7px}.tabulator .tabulator-footer .tabulator-page{display:inline-block;margin:0 2px;border:1px solid #aaa;border-radius:3px;padding:2px 5px;background:hsla(0,0%,100%,.2);color:#555;font-family:inherit;font-weight:inherit;font-size:inherit}.tabulator .tabulator-footer .tabulator-page.active{color:#d00}.tabulator .tabulator-footer .tabulator-page:disabled{opacity:.5}.tabulator .tabulator-footer .tabulator-page:not(.disabled):hover{cursor:pointer;background:rgba(0,0,0,.2);color:#fff}.tabulator .tablulator-loader{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;top:0;left:0;z-index:3;height:100%;width:100%;background:rgba(0,0,0,.4);text-align:center}.tabulator .tablulator-loader .tabulator-loader-msg{display:inline-block;margin:0 auto;padding:10px 20px;border-radius:10px;background:#fff;font-weight:700;font-size:16px}.tabulator .tablulator-loader .tabulator-loader-msg.tabulator-loading{border:4px solid #333;color:#000}.tabulator .tablulator-loader .tabulator-loader-msg.tabulator-error{border:4px solid #d00;color:#590000}.tabulator-row{position:relative;box-sizing:border-box;min-height:22px;border-bottom:1px solid #ddd}.tabulator-row,.tabulator-row:nth-child(2n){background-color:#fff}.tabulator-row.tabulator-selectable:hover{background-color:#bbb;cursor:pointer}.tabulator-row.tabulator-selected{background-color:#9abcea}.tabulator-row.tabulator-selected:hover{background-color:#769bcc;cursor:pointer}.tabulator-row.tabulator-moving{position:absolute;border-top:1px solid #ddd;border-bottom:1px solid #ddd;pointer-events:none!important;z-index:2}.tabulator-row .tabulator-row-resize-handle{position:absolute;right:0;bottom:0;left:0;height:5px}.tabulator-row .tabulator-row-resize-handle.prev{top:0;bottom:auto}.tabulator-row .tabulator-row-resize-handle:hover{cursor:ns-resize}.tabulator-row .tabulator-frozen{display:inline-block;position:absolute;background-color:inherit;z-index:1}.tabulator-row .tabulator-frozen.tabulator-frozen-left{border-right:2px solid #ddd}.tabulator-row .tabulator-frozen.tabulator-frozen-right{border-left:2px solid #ddd}.tabulator-row .tabulator-responsive-collapse{box-sizing:border-box;padding:5px;border-top:1px solid #ddd;border-bottom:1px solid #ddd}.tabulator-row .tabulator-responsive-collapse:empty{display:none}.tabulator-row .tabulator-responsive-collapse table{font-size:14px}.tabulator-row .tabulator-responsive-collapse table tr td{position:relative}.tabulator-row .tabulator-responsive-collapse table tr td:first-of-type{padding-right:10px}.tabulator-row .tabulator-cell{display:inline-block;position:relative;box-sizing:border-box;padding:4px;border-right:1px solid #ddd;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tabulator-row .tabulator-cell:last-of-type{border-right:none}.tabulator-row .tabulator-cell.tabulator-editing{border:1px solid #1d68cd;padding:0}.tabulator-row .tabulator-cell.tabulator-editing input,.tabulator-row .tabulator-cell.tabulator-editing select{border:1px;background:transparent}.tabulator-row .tabulator-cell.tabulator-validation-fail{border:1px solid #d00}.tabulator-row .tabulator-cell.tabulator-validation-fail input,.tabulator-row .tabulator-cell.tabulator-validation-fail select{border:1px;background:transparent;color:#d00}.tabulator-row .tabulator-cell:first-child .tabulator-col-resize-handle.prev{display:none}.tabulator-row .tabulator-cell.tabulator-row-handle{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box{width:80%}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box .tabulator-row-handle-bar{width:100%;height:3px;margin-top:2px;background:#666}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;height:15px;width:15px;border-radius:20px;background:#666;color:#fff;font-weight:700;font-size:1.1em}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle:hover{opacity:.7}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-close{display:initial}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-open,.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle .tabulator-responsive-collapse-toggle-close{display:none}.tabulator-row.tabulator-group{box-sizing:border-box;border-bottom:1px solid #999;border-right:1px solid #ddd;border-top:1px solid #999;padding:5px;padding-left:10px;background:#fafafa;font-weight:700;min-width:100%}.tabulator-row.tabulator-group:hover{cursor:pointer;background-color:rgba(0,0,0,.1)}.tabulator-row.tabulator-group.tabulator-group-visible .tabulator-arrow{margin-right:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #666;border-bottom:0}.tabulator-row.tabulator-group.tabulator-group-level-1 .tabulator-arrow{margin-left:20px}.tabulator-row.tabulator-group.tabulator-group-level-2 .tabulator-arrow{margin-left:40px}.tabulator-row.tabulator-group.tabulator-group-level-3 .tabulator-arrow{margin-left:60px}.tabulator-row.tabulator-group.tabulator-group-level-4 .tabulator-arrow{margin-left:80px}.tabulator-row.tabulator-group.tabulator-group-level-5 .tabulator-arrow{margin-left:100px}.tabulator-row.tabulator-group .tabulator-arrow{display:inline-block;width:0;height:0;margin-right:16px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:0;border-left:6px solid #666;vertical-align:middle}.tabulator-row.tabulator-group span{margin-left:10px;color:#666}</style>');
              
              // "modern" theme
              var theme_color = config.theme_color || 'blue'
              var secondary_color = 'skyblue'
              $('head').append('<style type="text/css">.tabulator{position:relative;border:1px solid #fff;background-color:#fff;overflow:hidden; font-family: Futura;font-size:14px;text-align:left;transform:translatez(0)}.tabulator[tabulator-layout=fitDataFill] .tabulator-tableHolder .tabulator-table{min-width:100%}.tabulator.tabulator-block-select{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabulator .tabulator-header{width:100%;border-bottom:3px solid ' + theme_color + ';margin-bottom:4px;color:' + theme_color + ';font-weight:700;white-space:nowrap;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;padding-left:10px;font-size:1.1em}.tabulator .tabulator-header,.tabulator .tabulator-header .tabulator-col{position:relative;box-sizing:border-box;background-color:#fff;overflow:hidden}.tabulator .tabulator-header .tabulator-col{display:inline-block;border-right:2px solid #fff;text-align:left;vertical-align:bottom}.tabulator .tabulator-header .tabulator-col.tabulator-moving{position:absolute;border:1px solid ' + theme_color + ';background:#e6e6e6;pointer-events:none}.tabulator .tabulator-header .tabulator-col .tabulator-col-content{box-sizing:border-box;position:relative;padding:4px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title{box-sizing:border-box;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-title-editor{box-sizing:border-box;width:100%;border:1px solid ' + theme_color + ';padding:1px;background:#fff;font-size:1em;color:' + theme_color + '}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-arrow{display:inline-block;position:absolute;top:9px;right:8px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #b7c3f1}.tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{position:relative;display:-ms-flexbox;display:flex;border-top:2px solid ' + theme_color + ';overflow:hidden}.tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols .tabulator-col:last-child{margin-right:-1px}.tabulator .tabulator-header .tabulator-col:first-child .tabulator-col-resize-handle.prev{display:none}.tabulator .tabulator-header .tabulator-col.ui-sortable-helper{position:absolute;background-color:#e6e6e6!important;border:1px solid #fff}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter{position:relative;box-sizing:border-box;margin-top:2px;width:100%;text-align:center}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter textarea{height:auto!important}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter svg{margin-top:3px}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter input::-ms-clear{width:0;height:0}.tabulator .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title{padding-right:25px}.tabulator .tabulator-header .tabulator-col.tabulator-sortable:hover{cursor:pointer;background-color:#e6e6e6}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-arrow{border-top:none;border-bottom:6px solid #b7c3f1}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=asc] .tabulator-col-content .tabulator-arrow{border-top:none;border-bottom:6px solid ' + theme_color + '}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=desc] .tabulator-col-content .tabulator-arrow{border-top:6px solid ' + theme_color + ';border-bottom:none}.tabulator .tabulator-header .tabulator-frozen{display:inline-block;position:absolute;z-index:1}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-left{padding-left:10px;border-right:2px solid #fff}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-right{border-left:2px solid #fff}.tabulator .tabulator-header .tabulator-calcs-holder{box-sizing:border-box;min-width:200%;border-top:2px solid ' + theme_color + '!important;background:#fff!important;border-top:1px solid #fff;border-bottom:1px solid #fff;overflow:hidden}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row{padding-left:0!important;background:#fff!important}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-cell{background:none}.tabulator .tabulator-header .tabulator-frozen-rows-holder{min-width:200%}.tabulator .tabulator-header .tabulator-frozen-rows-holder:empty{display:none}.tabulator .tabulator-tableHolder{position:relative;width:100%;white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch}.tabulator .tabulator-tableHolder:focus{outline:none}.tabulator .tabulator-tableHolder .tabulator-placeholder{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}.tabulator .tabulator-tableHolder .tabulator-placeholder[tabulator-render-mode=virtual]{position:absolute;top:0;left:0;height:100%}.tabulator .tabulator-tableHolder .tabulator-placeholder span{display:inline-block;margin:0 auto;padding:10px;color:' + theme_color + ';font-weight:700;font-size:16px}.tabulator .tabulator-tableHolder .tabulator-table{position:relative;display:inline-block;background-color:#f3f3f3;white-space:nowrap;overflow:visible;color:#333}.tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs{font-weight:700;background:#f2f2f2!important}.tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-top{border-bottom:2px solid ' + theme_color + '}.tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-bottom{border-top:2px solid ' + theme_color + '}.tabulator .tabulator-col-resize-handle{position:absolute;right:0;top:0;bottom:0;width:5px}.tabulator .tabulator-col-resize-handle.prev{left:0;right:auto}.tabulator .tabulator-col-resize-handle:hover{cursor:ew-resize}.tabulator .tabulator-footer{padding:5px 10px;border-top:1px solid #999;background-color:#fff;text-align:right;color:' + theme_color + ';font-weight:700;white-space:nowrap;-ms-user-select:none;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator .tabulator-footer .tabulator-calcs-holder{box-sizing:border-box;width:calc(100% + 20px);margin:-5px -10px 5px;text-align:left;background:#fff!important;border-top:3px solid ' + theme_color + '!important;border-bottom:2px solid ' + theme_color + '!important;border-bottom:1px solid #fff;border-top:1px solid #fff;overflow:hidden}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row{background:#fff!important}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-cell{background:none}.tabulator .tabulator-footer .tabulator-calcs-holder:only-child{margin-bottom:-5px;border-bottom:none;border-bottom:none!important}.tabulator .tabulator-footer .tabulator-pages{margin:0 7px}.tabulator .tabulator-footer .tabulator-page{display:inline-block;margin:0 2px;border:1px solid #aaa;border-radius:3px;padding:2px 5px;background:hsla(0,0%,100%,.2);color:' + theme_color + ';font-family: Futura;font-weight:inherit;font-size:inherit}.tabulator .tabulator-footer .tabulator-page.active{color:' + theme_color + '}.tabulator .tabulator-footer .tabulator-page:disabled{opacity:.5}.tabulator .tabulator-footer .tabulator-page:not(.disabled):hover{cursor:pointer;background:rgba(0,0,0,.2);color:#fff}.tabulator .tablulator-loader{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;top:0;left:0;z-index:3;height:100%;width:100%;background:rgba(0,0,0,.4);text-align:center}.tabulator .tablulator-loader .tabulator-loader-msg{display:inline-block;margin:0 auto;padding:10px 20px;border-radius:10px;background:#fff;font-weight:700;font-size:16px}.tabulator .tablulator-loader .tabulator-loader-msg.tabulator-loading{border:4px solid #333;color:#000}.tabulator .tablulator-loader .tabulator-loader-msg.tabulator-error{border:4px solid #d00;color:#590000}.tabulator-row{position:relative;box-sizing:border-box;min-height:24px;background-color:' + theme_color + ';padding-left:10px!important;margin-bottom:2px}.tabulator-row:nth-child(2n){background-color:' + secondary_color + '}.tabulator-row:nth-child(2n) .tabulator-cell{background-color:#fff}.tabulator-row.tabulator-selectable:hover{cursor:pointer}.tabulator-row.tabulator-selectable:hover .tabulator-cell{background-color:#bbb}.tabulator-row.tabulator-selected .tabulator-cell{background-color:#9abcea}.tabulator-row.tabulator-selected:hover .tabulator-cell{background-color:#769bcc;cursor:pointer}.tabulator-row.tabulator-moving{position:absolute;border-top:1px solid #fff;border-bottom:1px solid #fff;pointer-events:none!important;z-index:2}.tabulator-row .tabulator-row-resize-handle{position:absolute;right:0;bottom:0;left:0;height:5px}.tabulator-row .tabulator-row-resize-handle.prev{top:0;bottom:auto}.tabulator-row .tabulator-row-resize-handle:hover{cursor:ns-resize}.tabulator-row .tabulator-frozen{display:inline-block;position:absolute;background-color:inherit;z-index:1}.tabulator-row .tabulator-frozen.tabulator-frozen-left{padding-left:10px;border-right:2px solid #fff}.tabulator-row .tabulator-frozen.tabulator-frozen-right{border-left:2px solid #fff}.tabulator-row .tabulator-responsive-collapse{box-sizing:border-box;padding:5px;border-top:1px solid #fff;border-bottom:1px solid #fff}.tabulator-row .tabulator-responsive-collapse:empty{display:none}.tabulator-row .tabulator-responsive-collapse table{font-size:16px}.tabulator-row .tabulator-responsive-collapse table tr td{position:relative}.tabulator-row .tabulator-responsive-collapse table tr td:first-of-type{padding-right:10px}.tabulator-row .tabulator-cell{display:inline-block;position:relative;box-sizing:border-box;padding:6px 4px;border-right:2px solid #fff;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#f3f3f3}.tabulator-row .tabulator-cell.tabulator-editing{border:1px solid #1d68cd;padding:0}.tabulator-row .tabulator-cell.tabulator-editing input,.tabulator-row .tabulator-cell.tabulator-editing select{border:1px;background:transparent}.tabulator-row .tabulator-cell.tabulator-validation-fail{border:1px solid #d00}.tabulator-row .tabulator-cell.tabulator-validation-fail input,.tabulator-row .tabulator-cell.tabulator-validation-fail select{border:1px;background:transparent;color:#d00}.tabulator-row .tabulator-cell:first-child .tabulator-col-resize-handle.prev{display:none}.tabulator-row .tabulator-cell.tabulator-row-handle{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box{width:80%}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box .tabulator-row-handle-bar{width:100%;height:3px;margin-top:2px;background:#666}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;height:15px;width:15px;border-radius:20px;background:#666;color:#f3f3f3;font-weight:700;font-size:1.1em}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle:hover{opacity:.7}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-close{display:initial}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-open,.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle .tabulator-responsive-collapse-toggle-close{display:none}.tabulator-row.tabulator-group{box-sizing:border-box;border-bottom:2px solid ' + theme_color + ';border-top:2px solid ' + theme_color + ';padding:5px;padding-left:10px;background:#8ca0e8;font-weight:700;color:fff;margin-bottom:2px;min-width:100%}.tabulator-row.tabulator-group:hover{cursor:pointer;background-color:rgba(0,0,0,.1)}.tabulator-row.tabulator-group.tabulator-group-visible .tabulator-arrow{margin-right:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid ' + theme_color + ';border-bottom:0}.tabulator-row.tabulator-group.tabulator-group-level-1 .tabulator-arrow{margin-left:20px}.tabulator-row.tabulator-group.tabulator-group-level-2 .tabulator-arrow{margin-left:40px}.tabulator-row.tabulator-group.tabulator-group-level-3 .tabulator-arrow{margin-left:60px}.tabulator-row.tabulator-group.tabulator-group-level-4 .tabulator-arrow{margin-left:80px}.tabulator-row.tabulator-group.tabulator-group-level-5 .tabulator-arrow{margin-left:100px}.tabulator-row.tabulator-group .tabulator-arrow{display:inline-block;width:0;height:0;margin-right:16px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:0;border-left:6px solid ' + theme_color + ';vertical-align:middle}.tabulator-row.tabulator-group span{margin-left:10px;color:' + theme_color + '}</style>)');
          
              // more theming info here: http://tabulator.info/examples/3.5?#theming
          },
          // Render in response to the data or settings changing
          update: function(data, element, config, queryResponse) {
            
              // print data to console for debugging:
              console.log("data",data);
              console.log("config",config.theme_color);
              console.log("queryResponse",queryResponse);

            
              // destory old viz if already exists
              if ($("#transposed_table").hasClass("tabulator")) { $("#transposed_table").tabulator("destroy") }

              // add measures as initial column
              var clmns = [{
                  title: "",
                  field: "measure",
                  sortable: true,
                  datanum: -1
              }];

              // get dimension name that we are switching to be column headers
              dimension_name = queryResponse.fields.dimension_like[0].name;

              // loop through values for each column
              for (var i = 0; i < data.length; i++) {
                  var values = {
                      title: data[i][dimension_name].value,
                      field: data[i][dimension_name].value,
                      datanum: i,
                      sortable: true,
                      align: "right" // the actual data columns' data will align right
                  };
                  clmns.push(values)
              }

              var rws = [];
              // loop through the measures that we need to transpose
              for (var i = 0; i < queryResponse.fields.measure_like.length; i++) {
                  measure = queryResponse.fields.measure_like[i];

                  // create a row
                  var rw = {
                      measure: measure.label_short
                  };

                  // for each dimension, set the measure value
                  for (j = 1; j < clmns.length; j++) {
                      returned_value = data[clmns[j].datanum][measure.name];
                      if (returned_value.rendered != null) {
                          rw[clmns[j].field] = returned_value.rendered;
                      } else {
                          rw[clmns[j].field] = returned_value.value;
                      }              
                  }  

                  // add the row to the data
                  rws.push(rw);
              }

              // add data to the table
              var tbl = $("#transposed_table").tabulator({
                  layout: "fitColumns",
                  columns: clmns,
                  data: rws,
                  movableColumns: true
              });

          }
      };

      // initialize visualization with data
      looker.plugins.visualizations.add(viz);
  }());
