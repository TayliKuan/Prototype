var menuHierarchy =[
    ['受理作業',null, //[0][0]
        ['受理鍵入','TBAP0W010Q.html'],  //[0][2][0]
    ],
    
    ['編審作業','null',   //[1][0]
        ['整批編審','null', //[1][2][0]
            ['本案編審','TBCK0W010Q.html',],//[1][2][2][0]
            ['續發編審','',],//[1][2][3][0]
            ['補發編審','',],//[1][2][4][0]
            ['提繳時差轉入月退專戶','TBCK0W040Q.html',],//[1][2][5][0]
            ['月試核作業','',],//[1][2][6][0]
            ['應收款立帳作業','',],//[1][2][7][0]
        ],
        ['重新編審','TBCK0W070M.html'], //[1][3][0]
        ['註銷本案','TBCK0W080Q.html'],//[1][4][0]
    ],
    
    ['核定作業',null, //[2][0]
        ['整批核定','TBCO0W010Q.html'], //[2][2][0]
        ['單筆核定','TBCO0W020Q.html'],  //[2][3][0]
        ['取消核定','TBCO0W030Q.html'],  //[2][4][0]
        ['穿透核定','TBCO0W040Q.html'],  //[2][5][0] 
    ],
    
    ['複合作業',null, 
        ['複合決行','TBRC0W010U.html'], 
        ['決行後小改','XX'],  
        ['應收款立帳複核','XX'],  
        ['註銷應收款立帳複核','XX'],
        ['收回複核','XX'],  
        ['註銷收回複核','XX'],    
    ],
    
    ['月退休儲金核付作業','null',   
        ['核付作業','null', 
            ['月核付作業','',],
            ['支票寄發清冊（含清冊下載）','',],
            ['支票寄發地址貼條列印','',],
            ['月核付銀行匯款媒體匯出作業','',],
        ],
        ['退改匯作業','null', 
            ['銀行匯款媒體轉入作業','TBPY0W050N.html',],
            ['退匯通知書暨改匯回條列(補)印','TBPY0W060N.html',],
            ['退匯核定清單列(補)印','TBPY0W070.html',],
            ['退匯清冊列(補)印','TBPY0W080N.html',],
            ['改匯核定清單列(補)印','TBPY0W090N.html',],
            ['改匯清冊列(補)印','TBPY0W100N.html',],
        ],
        ['其他作業','null', 
            ['郵政匯票通知聯列(補)印','TBPY0W110N.html',],
            ['支票通知聯列(補)印','',],
        ],
    ],
    
    ['補發/改核/其他作業','null',   
        ['補發作業','null', 
            ['補發重新編審','',],
            ['註銷補發','',],
        ],
        ['改核作業','null', 
            ['改核重新編審','',],
            ['改核核定','',],
            ['註銷改核','',],
        ],
        ['其他作業','null', 
            ['死亡後改匯編審','',],
            ['死亡後改匯核定','',],
            ['民法繼承編審','',],
            ['民法繼承核定','',],
        ], 
    ],
    
    ['止發作業',null, 
        ['止發處理','XX'], 
        ['止發單補印','XX'],  
    ],
    
    ['應收款立帳作業',null, 
        ['應收款立帳初核','XX'], 
        ['註銷應收款立帳初核','XX'],  
    ],
    
    ['收回作業',null, 
        ['收回初核','XX'], 
        ['註銷收回初核','XX'],  
    ],
    
    ['查詢作業',null, 
        ['核發資料查詢','TBIQ0W010Q.html'], 
        ['月退專戶查詢','XX'],
        ['月退金額試算','XX'], 
        ['核發明細列印','XX'],  
        ['行政救濟案件查詢','XX'], 
        ['行政救濟統計查詢','XX'],  
    ],
    
    ['清單列印','null',   
        ['核定清單列(補)印','TBPR0W010L.html'], 
        ['核定函列(補)印','TBPR0W020L.html'],
        ['審核相關清單','null', 
            ['編審清單補印','TBPR0W030L.html',],
            ['網路申辦書補印','',],
            ['打包清單列(補)印','TBPR0W050L.html',],
            ['合格清冊補印','TBPR0W060L.html',],
            ['月試核異動清單補印','TBPR0W070L.html',],
            ['提繳時差轉入農退儲金月退專戶清單補印','TBPR0W080L.html',],
            ['應收款通知單','',],
            ['註銷應收款通知單','',],
            ['收回通知單','',],
            ['註銷收回通知單','',],
            ['另案扣減照會單列印','',],
        ],
        ['核付相關清單','null', 
            ['月退核付明細表(核付清單)補印','',],
            ['月退核發彙總表補印','',],
            ['月核定合格清冊','',],
            ['月退核發撥款總額表','',],
            ['月核付異動清單列(補)印','',],
        ], 
        ['統計及稽催作業','null', 
            ['農退儲金請領核發案件名冊','',],
            ['核定清單移交清冊','',],
            ['應收未收餘額清單','',],
            ['核發作業現況統計表','',],
            ['核發案件時效表','',],
            ['初核人員工作量統計表','',],
            ['農退儲金各縣市發放人數金額統計表','',],
            ['農退儲金發放人數按年齡組距性別統計表','',],
            ['受理案件統計表','',],
            ['受理登記簿','',],
            ['轉催收核定清單','',],
            ['註銷催收核定清單','',],
            ['受理後未處理清單','',],
            ['初核核定後未決行清單','',],
            ['應收款立帳初核後未確認清單','',],
            ['決行後未確認清單','',],
            ['農民退休儲金核發明細資料彙計','',],
            ['清查農民退休儲金已繳入專戶通知單','',],
        ], 
        ['其他列印作業','null', 
            ['年度扣繳憑單列(補)印','',],
            ['歸檔清單列(補)印作業','',],
        ], 
        ['排程列印作業',''],
    ],
    
    ['行政支援作業',null, 
        ['行政支援資料維護','XX'], 
        ['紀錄檔銷案處理','XX'],
        ['行政救濟維護','XX'], 
        ['管制清單列印','XX'],  
        ['行政支援資料查詢','XX'], 
    ],
    
    ['書函作業',null, 
        ['查詢作業','XX'], 
        ['列印作業','XX'],
        ['書函作業','XX'], 
        ['維護作業','XX'],  
    ],
    
    ['其他維護作業',null, 
        ['專戶回寫維護作業','XX'], 
        ['按月公告收益維謢作業','XX'],
        ['按月公告收益複核作業','XX'], 
        ['查詢戶政資料補送及列印作業','XX'],  
        ['農退儲金月退專戶維護作業','XX'], 
        ['管制檔維護作業','XX'],
        ['註銷催收維護作業','XX'], 
        ['扣減檔維護作業','XX'],  
    ],
    
    ['通函作業',null, 
        ['通函管理作業','XX'], 
        ['通函查詢作業','XX'],
        ['通函報表作業','XX'], 
        ['通函設定作業','XX'],  
    ],
    ['參數維護作業',null,
        ['參數維護作業','XX'],
        ['決行層級維護作業','TBPA0W020M.html'],
    ],
    
    ['服務元件',null, 
        ['對外系統元件：農退儲金月退專戶查詢作業(對外查詢)','XX'], 
        ['客服系統元件：農退儲金月退專戶查詢作業(對外查詢)','XX'],
        ['帳務系統元件','XX'], 
        ['出納系統元件','XX'],  
        ['整合系統元件','XX'], 
        ['專戶系統元件','XX'],  
        ['其他系統元件','XX'], 
    ],
    
    
    ]

        $(function () {
      function menuTreeBuilder(menus) {
        var html = "";
        if (menus) {
          if (typeof menus[0] === "string") {
            html += "<li>";
            if (menus.length > 2) {
              html += `<span class="caret">${menus[0]}</span><ul class="nested">`;
              html += menuTreeBuilder(menus.slice(2))
              html += "</ul>"
            } else if (typeof menus[1] === "string") {
              html += `<a href="${menus[1]}">${menus[0]}</a>`
            } else {
              html += menus[0];
            }
            html += "</li>";
          } else if (Array.isArray(menus[0])) {
            html += menus.map(menuTreeBuilder).join('');
          }
        }
        return html;
      }
      $("#menu").append(menuTreeBuilder(window.menuHierarchy))
    });

