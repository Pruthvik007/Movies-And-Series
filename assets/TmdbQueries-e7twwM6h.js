import{_ as W,c as Q,n as re,i as D,d as L,t as se,f as ne,e as j,g as V,s as ie,h as ae,k as _,S as ue,l as k,m as ce,o as oe,R as b,q as le,v as K,j as d,r as he,C as m,p as x,L as de,I as B,E as g,w as q}from"./index-Nv36QP9w.js";var z=function(s){W(n,s);function n(i,e){var t;return t=s.call(this)||this,t.client=i,t.options=e,t.trackedProps=[],t.selectError=null,t.bindMethods(),t.setOptions(e),t}var r=n.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),G(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return F(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return F(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(e,t){var u=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=u.queryKey),this.updateQuery();var o=this.hasListeners();o&&H(this.currentQuery,a,this.options,u)&&this.executeFetch(),this.updateResult(t),o&&(this.currentQuery!==a||this.options.enabled!==u.enabled||this.options.staleTime!==u.staleTime)&&this.updateStaleTimeout();var c=this.computeRefetchInterval();o&&(this.currentQuery!==a||this.options.enabled!==u.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)},r.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),u=this.client.getQueryCache().build(this.client,t);return this.createResult(u,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(e,t){var u=this,a={},o=function(l){u.trackedProps.includes(l)||u.trackedProps.push(l)};return Object.keys(e).forEach(function(c){Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:function(){return o(c),e[c]}})}),(t.useErrorBoundary||t.suspense)&&o("error"),a},r.getNextResult=function(e){var t=this;return new Promise(function(u,a){var o=t.subscribe(function(c){c.isFetching||(o(),c.isError&&(e!=null&&e.throwOnError)?a(c.error):u(c))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(e){return this.fetch(Q({},e,{meta:{refetchPage:e==null?void 0:e.refetchPage}}))},r.fetchOptimistic=function(e){var t=this,u=this.client.defaultQueryObserverOptions(e),a=this.client.getQueryCache().build(this.client,u);return a.fetch().then(function(){return t.createResult(a,u)})},r.fetch=function(e){var t=this;return this.executeFetch(e).then(function(){return t.updateResult(),t.currentResult})},r.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(re)),t},r.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!(D||this.currentResult.isStale||!L(this.options.staleTime))){var t=se(this.currentResult.dataUpdatedAt,this.options.staleTime),u=t+1;this.staleTimeoutId=setTimeout(function(){e.currentResult.isStale||e.updateResult()},u)}},r.computeRefetchInterval=function(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1},r.updateRefetchInterval=function(e){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=e,!(D||this.options.enabled===!1||!L(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(t.options.refetchIntervalInBackground||ne.isFocused())&&t.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},r.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},r.createResult=function(e,t){var u=this.currentQuery,a=this.options,o=this.currentResult,c=this.currentResultState,l=this.currentResultOptions,v=e!==u,f=v?e.state:this.currentQueryInitialState,y=v?this.currentResult:this.previousQueryResult,h=e.state,S=h.dataUpdatedAt,$=h.error,U=h.errorUpdatedAt,C=h.isFetching,p=h.status,A=!1,T=!1,R;if(t.optimisticResults){var w=this.hasListeners(),Z=!w&&G(e,t),ee=w&&H(e,u,t,a);(Z||ee)&&(C=!0,S||(p="loading"))}if(t.keepPreviousData&&!h.dataUpdateCount&&(y!=null&&y.isSuccess)&&p!=="error")R=y.data,S=y.dataUpdatedAt,p=y.status,A=!0;else if(t.select&&typeof h.data<"u")if(o&&h.data===(c==null?void 0:c.data)&&t.select===this.selectFn)R=this.selectResult;else try{this.selectFn=t.select,R=t.select(h.data),t.structuralSharing!==!1&&(R=j(o==null?void 0:o.data,R)),this.selectResult=R,this.selectError=null}catch(P){V().error(P),this.selectError=P}else R=h.data;if(typeof t.placeholderData<"u"&&typeof R>"u"&&(p==="loading"||p==="idle")){var O;if(o!=null&&o.isPlaceholderData&&t.placeholderData===(l==null?void 0:l.placeholderData))O=o.data;else if(O=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof O<"u")try{O=t.select(O),t.structuralSharing!==!1&&(O=j(o==null?void 0:o.data,O)),this.selectError=null}catch(P){V().error(P),this.selectError=P}typeof O<"u"&&(p="success",R=O,T=!0)}this.selectError&&($=this.selectError,R=this.selectResult,U=Date.now(),p="error");var te={status:p,isLoading:p==="loading",isSuccess:p==="success",isError:p==="error",isIdle:p==="idle",data:R,dataUpdatedAt:S,error:$,errorUpdatedAt:U,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>f.dataUpdateCount||h.errorUpdateCount>f.errorUpdateCount,isFetching:C,isRefetching:C&&p!=="loading",isLoadingError:p==="error"&&h.dataUpdatedAt===0,isPlaceholderData:T,isPreviousData:A,isRefetchError:p==="error"&&h.dataUpdatedAt!==0,isStale:N(e,t),refetch:this.refetch,remove:this.remove};return te},r.shouldNotifyListeners=function(e,t){if(!t)return!0;var u=this.options,a=u.notifyOnChangeProps,o=u.notifyOnChangePropsExclusions;if(!a&&!o||a==="tracked"&&!this.trackedProps.length)return!0;var c=a==="tracked"?this.trackedProps:a;return Object.keys(e).some(function(l){var v=l,f=e[v]!==t[v],y=c==null?void 0:c.some(function(S){return S===l}),h=o==null?void 0:o.some(function(S){return S===l});return f&&!h&&(!c||y)})},r.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!ie(this.currentResult,t)){var u={cache:!0};(e==null?void 0:e.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,t)&&(u.listeners=!0),this.notify(Q({},u,e))}},r.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}},r.onQueryUpdate=function(e){var t={};e.type==="success"?t.onSuccess=!0:e.type==="error"&&!ae(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(e){var t=this;_.batch(function(){e.onSuccess?(t.options.onSuccess==null||t.options.onSuccess(t.currentResult.data),t.options.onSettled==null||t.options.onSettled(t.currentResult.data,null)):e.onError&&(t.options.onError==null||t.options.onError(t.currentResult.error),t.options.onSettled==null||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach(function(u){u(t.currentResult)}),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})})},n}(ue);function fe(s,n){return n.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&n.retryOnMount===!1)}function G(s,n){return fe(s,n)||s.state.dataUpdatedAt>0&&F(s,n,n.refetchOnMount)}function F(s,n,r){if(n.enabled!==!1){var i=typeof r=="function"?r(s):r;return i==="always"||i!==!1&&N(s,n)}return!1}function H(s,n,r,i){return r.enabled!==!1&&(s!==n||i.enabled===!1)&&(!r.suspense||s.state.status!=="error")&&N(s,r)}function N(s,n){return s.isStaleByTime(n.staleTime)}var ve=function(s){W(n,s);function n(i,e){return s.call(this,i,e)||this}var r=n.prototype;return r.bindMethods=function(){s.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},r.setOptions=function(e,t){s.prototype.setOptions.call(this,Q({},e,{behavior:k()}),t)},r.getOptimisticResult=function(e){return e.behavior=k(),s.prototype.getOptimisticResult.call(this,e)},r.fetchNextPage=function(e){var t;return this.fetch({cancelRefetch:(t=e==null?void 0:e.cancelRefetch)!=null?t:!0,throwOnError:e==null?void 0:e.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:e==null?void 0:e.pageParam}}})},r.fetchPreviousPage=function(e){var t;return this.fetch({cancelRefetch:(t=e==null?void 0:e.cancelRefetch)!=null?t:!0,throwOnError:e==null?void 0:e.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:e==null?void 0:e.pageParam}}})},r.createResult=function(e,t){var u,a,o,c,l,v,f=e.state,y=s.prototype.createResult.call(this,e,t);return Q({},y,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ce(t,(u=f.data)==null?void 0:u.pages),hasPreviousPage:oe(t,(a=f.data)==null?void 0:a.pages),isFetchingNextPage:f.isFetching&&((o=f.fetchMeta)==null||(c=o.fetchMore)==null?void 0:c.direction)==="forward",isFetchingPreviousPage:f.isFetching&&((l=f.fetchMeta)==null||(v=l.fetchMore)==null?void 0:v.direction)==="backward"})},n}(z);function pe(){var s=!1;return{clearReset:function(){s=!1},reset:function(){s=!0},isReset:function(){return s}}}var Re=b.createContext(pe()),ge=function(){return b.useContext(Re)};function ye(s,n,r){return typeof n=="function"?n.apply(void 0,r):typeof n=="boolean"?n:!!s}function Y(s,n){var r=b.useRef(!1),i=b.useState(0),e=i[1],t=le(),u=ge(),a=t.defaultQueryObserverOptions(s);a.optimisticResults=!0,a.onError&&(a.onError=_.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=_.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=_.batchCalls(a.onSettled)),a.suspense&&(typeof a.staleTime!="number"&&(a.staleTime=1e3),a.cacheTime===0&&(a.cacheTime=1)),(a.suspense||a.useErrorBoundary)&&(u.isReset()||(a.retryOnMount=!1));var o=b.useState(function(){return new n(t,a)}),c=o[0],l=c.getOptimisticResult(a);if(b.useEffect(function(){r.current=!0,u.clearReset();var v=c.subscribe(_.batchCalls(function(){r.current&&e(function(f){return f+1})}));return c.updateResult(),function(){r.current=!1,v()}},[u,c]),b.useEffect(function(){c.setOptions(a,{listeners:!1})},[a,c]),a.suspense&&l.isLoading)throw c.fetchOptimistic(a).then(function(v){var f=v.data;a.onSuccess==null||a.onSuccess(f),a.onSettled==null||a.onSettled(f,null)}).catch(function(v){u.clearReset(),a.onError==null||a.onError(v),a.onSettled==null||a.onSettled(void 0,v)});if(l.isError&&!u.isReset()&&!l.isFetching&&ye(a.suspense,a.useErrorBoundary,[l.error,c.getCurrentQuery()]))throw l.error;return a.notifyOnChangeProps==="tracked"&&(l=c.trackResult(l,a)),l}function M(s,n,r){var i=K(s,n,r);return Y(i,z)}function J(s,n,r){var i=K(s,n,r);return Y(i,ve)}const X=({count:s=1,size:n,height:r,width:i})=>d.jsx(d.Fragment,{children:Array.from({length:s}).map((e,t)=>d.jsx("div",{role:"placeholder",className:"max-w-sm animate-pulse",children:d.jsx("div",{className:`bg-gray-200 dark:bg-gray-700 ${n?`card-${n}`:`${!r&&!i?"card-sm md:card-md lg:card-lg":`${r} ${i}`}`}`})},t))}),Oe=({imagePath:s,alt:n,className:r=""})=>{const[i,e]=he.useState(!0);return d.jsx("div",{className:`card-sm md:card-md lg:card-lg overflow-y-clip ${r}`,children:s?d.jsx("img",{src:m.ENV.TMDB_API_IMAGE_URL+x.lg+s,alt:n,style:{filter:`${i?"blur(20px)":""}`,transition:"1s filter linear"},onLoad:()=>{e(!1)},loading:"lazy",height:"100%",width:"100%",srcSet:`${m.ENV.TMDB_API_IMAGE_URL+x.sm+s} 300w, ${m.ENV.TMDB_API_IMAGE_URL+x.md+s} 768w, ${m.ENV.TMDB_API_IMAGE_URL+x.lg+s} 1280w`,sizes:"(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"}):d.jsxs("div",{className:"relative",children:[d.jsx(X,{}),d.jsx("p",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:n})]})})},Se=({media:s})=>{const n=s.poster_path?s.poster_path:s.backdrop_path,r=s.title?s.title:s.name;return d.jsxs("div",{className:"relative",children:[d.jsx(Oe,{imagePath:n,alt:r}),s.vote_average!==0&&d.jsx("div",{className:"absolute top-1 right-1",children:d.jsxs("div",{className:"badge badge-xs sm:badge-sm md:badge-md lg:badge-lg badge-neutral",children:[s.vote_average.toFixed(1),"/10"]})})]})},me=({mediaList:s,mediaType:n,isLoading:r})=>d.jsxs(d.Fragment,{children:[s==null?void 0:s.map(i=>d.jsx(de,{to:`/${m.ENV.BASE_URL}/details/${n}/${i.id}`,children:d.jsx(Se,{media:i})},i.id)),r&&d.jsx(X,{count:20})]});async function E(s="",n="GET",r=void 0){const i=new URL(m.ENV.TMDB_API_BASE_URL+s);return i.searchParams.set("api_key",m.ENV.TMDB_API_KEY),(await fetch(i,{method:n,body:JSON.stringify(r)})).json()}class Ee{getMedia(n,r){if(r){const i=new URLSearchParams(Object.entries(r).filter(e=>e[1]!==null&&e[1]!==void 0&&e[1]!=="")).toString();return E(n+"?"+i)}else return E(n)}getMediaDetails(n,r){return E(`${n}${r}`)}getMediaSearchResults(n,r){const i=new URLSearchParams(Object.entries(r).filter(e=>e[1]!==null&&e[1]!==void 0&&e[1]!=="")).toString();return E(n+"?"+i)}getMediaRecomendations(n,r){return E(`${n.replace(B,r.toString())}`)}getGenres(n){return E(n)}getVideos(n,r){return E(`${n.replace(B,r)}`)}}const I=new Ee,Ie=(s,n)=>M([`${s}-${n}`,n],()=>I.getMedia(q[s][n]),{keepPreviousData:!0}),Pe=(s,n,r)=>J({queryKey:[`${s}-${n}`,s,n,r],queryFn:({pageParam:i=1})=>I.getMedia(q[s==null?void 0:s.toUpperCase()][n==null?void 0:n.toUpperCase()],{...r,page:i}),getNextPageParam:i=>i.page+1}),_e=(s,n)=>M([`${s}-details-${n}`,n,s],()=>I.getMediaDetails(s==="MOVIES"?g.DETAILS_OF_MOVIE:g.DETAILS_OF_SHOWS,n)),Me=(s,n)=>M([`${s}-recomendations-${n}`,n,s],()=>I.getMediaRecomendations(s==="MOVIES"?g.MOVIE_RECOMENDATIONS:g.SHOW_RECOMENDATIONS,n),{keepPreviousData:!1}),xe=(s,n)=>J({queryKey:[`${s}-search`,s,n],queryFn:({pageParam:r=1})=>I.getMediaSearchResults(s==="MOVIES"?g.SEARCH_MOVIE:g.SEARCH_SHOWS,{...n,page:r}),enabled:n.query.length>0,getNextPageParam:r=>r.page+1}),Qe=s=>{const n=s==="MOVIES"?g.GENRES_OF_MOVIES:g.GENRES_OF_SHOWS,{data:r,error:i}=M([`${s}-genres`],()=>I.getGenres(n));return i?[]:(r==null?void 0:r.genres)||[]},Ce=(s,n)=>{const r=s==="MOVIES"?g.VIDEOS_OF_MOVIE:g.VIDEOS_OF_SHOW;return M([`${s}-videos-${n}`],()=>I.getVideos(r,n))};export{me as M,Oe as T,_e as a,Me as b,xe as c,Qe as d,Pe as e,Ie as f,Ce as u};
