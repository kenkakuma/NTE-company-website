import{u as S}from"./C_xvDEiN.js";import{d as A,a as b,b as u}from"./tAfASyMD.js";import{n as k,d as w,G as T,p as D,M as d,a0 as x,Z as s,u as n,J as p,a1 as g,_ as o,N as h}from"./BnK3X0rM.js";import{_ as I}from"./DlAUqK2U.js";const B=A("articles",{state:()=>({articles:[],selectedArticle:null,loading:!1,error:null}),getters:{getArticlesByCategory:e=>t=>e.articles.filter(i=>i.category===t),getLatestArticles:e=>(t=5)=>e.articles.sort((i,l)=>new Date(l.date).getTime()-new Date(i.date).getTime()).slice(0,t),getArticleById:e=>t=>e.articles.find(i=>i.id===t),getArticlesByTag:e=>t=>e.articles.filter(i=>i.tags&&i.tags.includes(t)),getAllTags:e=>{const t=new Set;return e.articles.forEach(i=>{i.tags&&i.tags.forEach(l=>t.add(l))}),Array.from(t).sort()},getCategoryStats:e=>{const t={};return e.articles.forEach(i=>{t[i.category]=(t[i.category]||0)+1}),t},getTotalCount:e=>e.articles.length},actions:{async initialize(){this.loading=!0,this.error=null;try{{const e=localStorage.getItem("notrace_articles");e?this.articles=JSON.parse(e):(this.loadDefaultArticles(),this.saveToStorage())}}catch(e){console.error("Failed to initialize articles:",e),this.error="データの読み込みに失敗しました",this.loadDefaultArticles()}finally{this.loading=!1}},loadDefaultArticles(){this.articles=[{id:1,date:"2025.01.15",title:"無迹探索株式会社設立準備開始のお知らせ",category:"企業ニュース",excerpt:"新しい価値創造を目指して、無迹探索株式会社の設立準備を開始いたします。革新的なソリューションで、お客様と共に成長していくことを目指しています。",content:`
            <p>この度、無迹探索株式会社の設立準備を開始することをお知らせいたします。</p>
            <p>私たちは、革新的なソリューションで新たなビジネス価値を創造し、お客様と共に成長していくことを目指しています。</p>
            <h2>設立準備の背景</h2>
            <p>急速に変化するビジネス環境において、企業には常に新しい価値創造が求められています。私たちは、技術・ビジネス・文化の多分野にわたる専門知識を活かし、お客様の課題解決に貢献してまいります。</p>
            <h2>今後の展開</h2>
            <ul>
              <li>コーヒー事業の本格展開</li>
              <li>展示・イベント運営サービスの拡充</li>
              <li>研究開発ラボの設立</li>
              <li>会員制コミュニティの運営開始</li>
            </ul>
            <p>設立に向けた準備が整い次第、改めてご報告させていただきます。今後ともどうぞよろしくお願いいたします。</p>
          `,readTime:"3分",tags:["設立","企業情報","ニュース","コンサルティング"]},{id:2,date:"2025.01.10",title:"東京ルアー・フライフィッシング学院 2025年春季コース募集開始",category:"サービス",excerpt:"初心者から上級者まで、本格的なフライフィッシング技術を学べるコースです。経験豊富なインストラクターによる実践的な指導を行います。",content:`
            <p>東京ルアー・フライフィッシング学院では、2025年春季コースの募集を開始いたします。</p>
            <p>経験豊富なインストラクターによる実践的な指導で、フライフィッシングの技術を習得できます。</p>
            <h2>コース内容</h2>
            <h3>初心者コース</h3>
            <ul>
              <li>フライフィッシングの基本知識</li>
              <li>キャスティング技術の習得</li>
              <li>安全な釣行のための知識</li>
            </ul>
            <h3>中級・上級者コース</h3>
            <ul>
              <li>高度なキャスティング技術</li>
              <li>フライタイイング実習</li>
              <li>河川での実践練習</li>
            </ul>
            <h2>募集要項</h2>
            <p><strong>期間:</strong> 2025年4月〜6月（全12回）</p>
            <p><strong>場所:</strong> 東京都内施設 + 河川実習</p>
            <p><strong>定員:</strong> 各コース20名</p>
            <p><strong>申込締切:</strong> 2025年3月31日</p>
          `,readTime:"4分",tags:["フィッシング","教育","コース","スポーツ","募集"]},{id:3,date:"2025.01.08",title:"厳選コーヒー商品ラインナップ拡充について",category:"コーヒー事業",excerpt:"サステナブル調達による高品質コーヒー商品の新ラインナップを発表。生産者との直接取引により、最高品質のコーヒーをお届けします。",content:`
            <p>厳選されたコーヒー豆を使用した新商品ラインナップを発表いたします。</p>
            <p>サステナブル調達にこだわり、生産者との直接取引により高品質なコーヒーを提供いたします。</p>
            <h2>新商品ラインナップ</h2>
            <h3>プレミアムシングルオリジン</h3>
            <ul>
              <li>エチオピア イルガチェフェ</li>
              <li>コロンビア ウイラ県</li>
              <li>ケニア AA</li>
            </ul>
            <h3>ブレンドシリーズ</h3>
            <ul>
              <li>モーニングブレンド</li>
              <li>エスプレッソブレンド</li>
              <li>デカフェブレンド</li>
            </ul>
            <h2>サステナブル調達への取り組み</h2>
            <p>私たちは、環境に配慮した持続可能なコーヒー生産を支援しています。生産者との長期的なパートナーシップにより、品質向上と環境保護の両立を目指しています。</p>
            <blockquote>
              「一杯のコーヒーから始まる、持続可能な未来」
            </blockquote>
            <p>新商品は2025年2月より順次発売予定です。詳細については改めてお知らせいたします。</p>
          `,readTime:"3分",tags:["コーヒー","新商品","サステナブル","品質","環境"]},{id:4,date:"2025.01.05",title:"中国アーティスト展示スペース 中目黒オープン準備中",category:"展示・イベント",excerpt:"現代中国アートを紹介する展示スペースが中目黒にオープン予定。文化交流を通じて新たな価値創造を目指します。",content:`
            <p>中目黒に現代中国アートを紹介する展示スペースをオープンする準備を進めています。</p>
            <p>文化交流を通じて新たな価値創造を目指し、日中間の相互理解を深める場を提供いたします。</p>
            <h2>展示スペースについて</h2>
            <p><strong>所在地:</strong> 東京都目黒区中目黒</p>
            <p><strong>面積:</strong> 約200平方メートル</p>
            <p><strong>オープン予定:</strong> 2025年3月</p>
            <h2>展示予定作品</h2>
            <ul>
              <li>現代絵画作品</li>
              <li>彫刻・インスタレーション</li>
              <li>映像・デジタルアート</li>
              <li>書道・伝統工芸</li>
            </ul>
            <h2>文化交流プログラム</h2>
            <p>展示だけでなく、以下のプログラムも予定しています：</p>
            <ul>
              <li>アーティストトーク</li>
              <li>ワークショップ</li>
              <li>文化講座</li>
              <li>交流イベント</li>
            </ul>
            <p>詳細な情報は、準備が整い次第お知らせいたします。</p>
          `,readTime:"3分",tags:["展示","アート","文化交流","イベント","中国","中目黒"]},{id:5,date:"2025.01.03",title:"2025年限定釣具予約受付開始 - Shimano・Daiwa最新モデル",category:"釣具・器具",excerpt:"2025年の限定釣具の予約受付を開始。Shimano、Daiwの最新モデルを含む厳選されたラインナップをご用意しました。",content:`
            <p>2025年の限定釣具の予約受付を開始いたします。</p>
            <p>Shimano、Daiwaの最新モデルを含む厳選されたラインナップをご用意しました。</p>
            <h2>予約可能商品</h2>
            <h3>Shimano 2025年新作</h3>
            <ul>
              <li>ステラ SW 2025モデル</li>
              <li>エクスセンス infinity 2025</li>
              <li>カルカッタコンクエスト MD</li>
            </ul>
            <h3>Daiwa 2025年新作</h3>
            <ul>
              <li>イグジスト 2025</li>
              <li>ソルティガ BJ 2025</li>
              <li>月下美人 AIR AGS 2025</li>
            </ul>
            <h2>予約特典</h2>
            <p>予約いただいたお客様には以下の特典をご用意：</p>
            <ul>
              <li>発売日前優先お渡し</li>
              <li>専用メンテナンスサービス</li>
              <li>限定オリジナルケース</li>
              <li>使用方法レクチャー</li>
            </ul>
            <h2>予約方法</h2>
            <p>お電話またはメールにてご予約を承ります。数量限定のため、お早めにお申し込みください。</p>
            <p><strong>予約期間:</strong> 2025年1月3日〜1月31日</p>
            <p><strong>お渡し予定:</strong> 2025年3月上旬</p>
          `,readTime:"3分",tags:["釣具","器具","Shimano","Daiwa","限定","予約","新商品"]}]},async addArticle(e){this.loading=!0,this.error=null;try{const t={...e,id:Date.now()};return this.articles.unshift(t),this.saveToStorage(),t}catch(t){throw console.error("Failed to add article:",t),this.error="記事の追加に失敗しました",t}finally{this.loading=!1}},async updateArticle(e){this.loading=!0,this.error=null;try{const t=this.articles.findIndex(i=>i.id===e.id);if(t!==-1)this.articles[t]=e,this.saveToStorage(),this.selectedArticle&&this.selectedArticle.id===e.id&&(this.selectedArticle=e);else throw new Error("Article not found")}catch(t){throw console.error("Failed to update article:",t),this.error="記事の更新に失敗しました",t}finally{this.loading=!1}},async deleteArticle(e){this.loading=!0,this.error=null;try{const t=this.articles.findIndex(i=>i.id===e);if(t!==-1)this.articles.splice(t,1),this.saveToStorage(),this.selectedArticle&&this.selectedArticle.id===e&&(this.selectedArticle=null);else throw new Error("Article not found")}catch(t){throw console.error("Failed to delete article:",t),this.error="記事の削除に失敗しました",t}finally{this.loading=!1}},setSelectedArticle(e){this.selectedArticle=e},async clearAllArticles(){this.loading=!0,this.error=null;try{this.articles=[],this.selectedArticle=null,this.saveToStorage()}catch(e){throw console.error("Failed to clear articles:",e),this.error="記事のクリアに失敗しました",e}finally{this.loading=!1}},async importArticles(e){this.loading=!0,this.error=null;try{this.articles=e,this.saveToStorage()}catch(t){throw console.error("Failed to import articles:",t),this.error="記事のインポートに失敗しました",t}finally{this.loading=!1}},exportArticles(){return JSON.stringify(this.articles,null,2)},saveToStorage(){try{localStorage.setItem("notrace_articles",JSON.stringify(this.articles))}catch(e){console.error("Failed to save to localStorage:",e),this.error="データの保存に失敗しました"}},createBackup(){{const t=`notrace_articles_backup_${new Date().toISOString().replace(/[:.]/g,"-")}`;return localStorage.setItem(t,JSON.stringify(this.articles)),t}},listBackups(){{const e=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);i&&i.startsWith("notrace_articles_backup_")&&e.push(i)}return e.sort().reverse()}},async restoreFromBackup(e){{const t=localStorage.getItem(e);if(t)try{const i=JSON.parse(t);await this.importArticles(i)}catch(i){throw console.error("Failed to restore from backup:",i),this.error="バックアップからの復元に失敗しました",i}}}}}),E={class:"anthropic-theme about-page"},F={class:"articles-section"},N={class:"custom-container"},O={key:0},C={class:"articles-grid"},J=["onClick"],L={class:"article-date-badge"},M={class:"month"},R={class:"day"},q={class:"article-content"},z={class:"article-header"},G={class:"article-title"},H={class:"article-meta"},V={class:"article-category"},W={class:"article-info"},$={class:"article-excerpt"},K={key:1,class:"article-detail"},P={class:"article-detail-card"},X={class:"article-detail-header"},Z={class:"article-detail-meta"},j={class:"detail-category"},Q={class:"detail-info"},U={class:"article-detail-title"},Y=["innerHTML"],tt={class:"article-tags"},et={class:"tags-list"},it=k({__name:"about",setup(e){const{setSEO:t}=S();t("about");const i=B(),l=w(null);T(async()=>{await i.initialize();const a=b().query.articleId;if(a){const r=i.getArticleById(Number(a));r&&(l.value=r)}});const _=D(()=>i.articles),f=c=>{l.value=c,u().push({query:{articleId:c.id}})},y=()=>{l.value=null,u().push({query:{}})},m=c=>c.split(".")[1]+"月",v=c=>c.split(".")[2];return(c,a)=>(h(),d("div",E,[a[2]||(a[2]=x('<section class="about-hero-section" data-v-a2b542a9><div class="custom-container" data-v-a2b542a9><div class="hero-content" data-v-a2b542a9><h1 class="hero-title" data-v-a2b542a9>企業情報・ニュース</h1><p class="hero-description" data-v-a2b542a9> NO TRACE EXPLORERの最新ニュース、お知らせ、サービス情報をご覧いただけます </p></div></div></section>',1)),s("section",F,[s("div",N,[n(l)?(h(),d("div",K,[s("button",{class:"back-button",onClick:y}," ← 記事一覧に戻る "),s("div",P,[s("div",X,[s("div",Z,[s("span",j,o(n(l).category),1),s("span",Q,o(n(l).date)+" | "+o(n(l).readTime),1)]),s("h1",U,o(n(l).title),1)]),s("div",{class:"article-detail-content",innerHTML:n(l).content},null,8,Y),s("div",tt,[a[1]||(a[1]=s("span",{class:"tags-label"},"タグ:",-1)),s("div",et,[(h(!0),d(p,null,g(n(l).tags,r=>(h(),d("span",{key:r,class:"tag-item"},o(r),1))),128))])])])])):(h(),d("div",O,[s("div",C,[(h(!0),d(p,null,g(n(_),r=>(h(),d("div",{key:r.id,class:"article-card",onClick:st=>f(r)},[s("div",L,[s("div",M,o(m(r.date)),1),s("div",R,o(v(r.date)),1)]),s("div",q,[s("div",z,[s("h3",G,o(r.title),1),a[0]||(a[0]=s("div",{class:"article-arrow"},"→",-1))]),s("div",H,[s("span",V,o(r.category),1),s("span",W,o(r.date)+" | "+o(r.readTime),1)]),s("p",$,o(r.excerpt),1)])],8,J))),128))])]))])])]))}}),ct=I(it,[["__scopeId","data-v-a2b542a9"]]);export{ct as default};
