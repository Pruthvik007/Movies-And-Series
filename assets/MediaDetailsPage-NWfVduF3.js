import{j as e,C as d,p as h,r as f,M as m,a as g,L as p,u as b,B as j}from"./index-Nv36QP9w.js";import{T as w,u as v,a as N,b as y,M as k}from"./TmdbQueries-e7twwM6h.js";import{E as _}from"./ErrorPage-2y53fVBG.js";const M=({color:r})=>e.jsx("svg",{className:`w-4 h-4 ms-1 ${r}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 20",children:e.jsx("path",{d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})}),E=({actualRating:r,totalRating:t,displayText:a})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-row items-center flex-wrap justify-center gap-1",children:[e.jsx("div",{className:"flex flex-row",children:Array.from({length:t}).map((o,l)=>e.jsx(M,{color:l<Math.floor(r)?"text-yellow-300":"text-gray-300 dark:text-gray-500"},l))}),a&&e.jsx("p",{className:"text-sm ms-1",children:a})]})}),L=({genres:r})=>e.jsxs("div",{id:"genres",className:"flex flex-col items-center md:flex-row bg-base-100 rounded-xl",children:[e.jsx("p",{className:"text-xl font-bold text-white pl-3",children:"Genres:"}),e.jsx("div",{className:"max-w-full overflow-x-auto p-3",children:e.jsx("div",{className:"flex flex-row justify-start rounded-md shadow-sm gap-2",role:"group",children:r.map(t=>e.jsx("button",{disabled:!0,type:"button",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",children:t.name},t.id))})})]}),S=({mediaDetails:r})=>e.jsxs("div",{id:"production_companies",className:"flex flex-col items-center md:flex-row md:items-center bg-base-100 rounded-xl",children:[e.jsx("p",{className:"text-xl font-bold text-white pl-3",children:"Production Companies:"}),e.jsx("div",{className:"max-w-full overflow-x-auto p-3",children:e.jsx("div",{className:"flex flex-row justify-start rounded-md shadow-sm gap-2",role:"group",children:r.production_companies.map(t=>e.jsx("button",{disabled:!0,type:"button",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",children:t.name},t.id))})})]}),V=({mediaDetails:r,mediaType:t})=>e.jsx(e.Fragment,{children:t==="MOVIES"?e.jsxs("p",{className:"text-3xl text-white",children:[r.original_title," (",r.release_date.split("-")[0],")"]}):e.jsxs("p",{className:"text-3xl text-white",children:[r.original_name," (",r.first_air_date.split("-")[0],")"]})}),R=({name:r,id:t,type:a="VIDEO",mediaType:o})=>e.jsxs("div",{children:[e.jsx(g.Header,{children:e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:r})}),e.jsxs(g.Body,{children:[t.length>0&&e.jsx("iframe",{className:"w-full h-80",src:(a==="VIDEO"?d.YOUTUBE_VIDEO_URL:o==="MOVIES"?d.VIDSRC_MOVIE_URL:d.VIDSRC_SHOW_URL)+t,allowFullScreen:!0}),t.length===0&&e.jsx("p",{className:"text-xl font-bold text-red-500 text-center",children:"Video Not Available"})]})]}),B=({mediaType:r,mediaDetails:t})=>{const{openModal:a}=f.useContext(m),o=v(r,t.id.toString());let l={name:"",id:""};if(o.isSuccess){const s=o.data.results.filter(n=>n.official&&n.site==="YouTube"&&n.type==="Trailer")[0];l={name:s?s.name:"",id:s?s.key:""}}return e.jsxs("div",{className:"flex flex-col gap-3 bg-neutral p-3 rounded-xl max-w-full overflow-x-auto",children:[e.jsx(V,{mediaDetails:t,mediaType:r}),t.tagline!==void 0&&t.tagline.length>0&&e.jsxs("p",{className:"text-xl italic font-semibold text-gray-900 dark:text-white",children:['"',t.tagline,'"']}),e.jsx("div",{className:"text-xl italic font-semibold text-gray-900 dark:text-white",children:e.jsx("p",{children:t.overview})}),e.jsx("div",{className:"flex flex-row gap-3 justify-center md:justify-start",children:e.jsx("button",{onClick:()=>a(e.jsx(R,{...l})),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",children:"Play Trailer"})}),e.jsxs("div",{className:"flex flex-col gap-3 lg:flex-row",children:[e.jsx(L,{genres:t.genres}),e.jsx(S,{mediaDetails:t})]})]})},C=({mediaType:r,mediaDetails:t})=>e.jsxs("div",{className:"rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-start md:flex-row gap-5 text-center md:text-left p-3",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(w,{className:"card-lg md:card-lg",imagePath:d.ENV.TMDB_API_IMAGE_URL+h.original+(t==null?void 0:t.poster_path),alt:t==null?void 0:t.id.toString()}),e.jsx(E,{actualRating:Number((t.vote_average/2).toFixed(1)),totalRating:5,displayText:`${t.vote_average.toFixed(1)} / 10`})]}),t&&e.jsx(B,{mediaDetails:t,mediaType:r})]}),I=({to:r})=>e.jsx("button",{className:"btn hover:btn-primary btn-neutral btn-sm lg:btn-md text-white font-bold py-2 px-4 rounded fixed right-5 bottom-5",children:e.jsx(p,{to:r,children:"Back"})}),A=()=>{var n,x,i,c,u;const{id:r,mediaType:t}=b(),{isLoading:a,error:o,data:l}=N(t,r),s=y(t,r);return a?e.jsx(j,{}):o?e.jsx(_,{}):e.jsxs("div",{className:"flex flex-col gap-5 p-3",children:[l&&e.jsx(C,{mediaDetails:l,mediaType:t}),((x=(n=s.data)==null?void 0:n.results)==null?void 0:x.length)!==void 0&&((c=(i=s.data)==null?void 0:i.results)==null?void 0:c.length)>0&&e.jsxs("div",{className:"bg-neutral rounded-xl p-3",children:[e.jsx("p",{className:"text-3xl font-bold text-white font-sans py-2",children:"Recommendations"}),e.jsx("div",{className:"flex flex-row gap-3 scrollbar-hidden",children:e.jsx(k,{mediaList:(u=s.data)==null?void 0:u.results,mediaType:t,isLoading:s.isLoading})})]}),e.jsx(I,{to:`/${d.ENV.BASE_URL}`})]})};export{A as default};
