import{j as e,M as a,C as t,r as s,a as l,u as i,b as d,c as n,B as r,W as o,T as x,d as c,I as m,Q as p,e as h,f as g,S as j,g as u}from"./index-feUWwkPH.js";import{u as f}from"./useFilters-CR3xKYoA.js";const y=({name:s,id:l,type:i="VIDEO",mediaType:d="movies"})=>{const n=("VIDEO"===i?t.YOUTUBE_VIDEO_URL:"movies"===d?t.VIDSRC_MOVIE_URL:t.VIDSRC_SHOW_URL)+l;return e.jsxs(e.Fragment,{children:[s&&e.jsx(a.Header,{children:e.jsx("h3",{className:"text-sm md:text-xl font-semibold",children:s})}),e.jsxs(a.Body,{children:[l&&e.jsx("iframe",{className:"w-full h-48 sm:h-80",src:n,allowFullScreen:!0}),!l&&e.jsx("p",{className:"text-xl font-bold text-red-500 text-center",children:"Video Not Available"})]})]})},N=({mediaType:a,id:t})=>{const{openModal:d}=s.useContext(l),n=()=>{d(e.jsx(y,{name:"Watch At VidSrc",id:t.toString(),type:"MEDIA",mediaType:a}))};return i("Enter",n),e.jsx("button",{onClick:n,className:"custom-btn-primary",children:"movies"===a?"Watch Movie":"Watch Show"})},v=({color:a})=>e.jsx("svg",{className:`w-4 h-4 ms-1 ${a}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 20",children:e.jsx("path",{d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})}),w=({actualRating:a,totalRating:t,displayText:s})=>e.jsxs("div",{className:"flex items-center flex-wrap gap-1 max-w-fit",children:[e.jsx("div",{className:"flex",children:Array.from({length:t}).map(((t,s)=>e.jsx(v,{color:s<Math.floor(a)?"text-yellow-300":"text-gray-300 dark:text-gray-500"},s)))}),s&&e.jsx("p",{className:"text-sm ms-1",children:s})]}),b=({mediaType:a,mediaId:t})=>{const{isLoading:c,error:m,data:p}=d(a,t),{openModal:h}=s.useContext(l),g=n(a,t),j=()=>{h(e.jsx(y,{...x.getOfficialTrailer(g.data)}))};return i(" ",j),e.jsxs("div",{children:[c&&e.jsx(r,{}),null!==m&&e.jsx("p",{className:"text-3xl text-red-500",children:"Something Went Wrong!"}),p&&e.jsxs("div",{className:"rounded-lg shadow flex flex-col items-center md:flex-row gap-5 text-center md:text-left justify-center p-5",children:[e.jsx(_,{mediaDetails:p}),e.jsxs("div",{className:"flex flex-col gap-3 bg-neutral p-3 rounded-xl w-full md:w-2/3 lg:w-3/4",children:[e.jsx(T,{mediaDetails:p,mediaType:a}),p.tagline&&p.tagline.length>0&&e.jsxs("p",{className:"text-md md:text-lg italic font-semibold text",children:['"',p.tagline,'"']}),e.jsx("div",{className:"text-lg md:text-xl italic font-semibold text",children:e.jsx("p",{children:p.overview})}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-3 justify-center items-center md:justify-start",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:j,className:"custom-btn-primary",children:"Watch Trailer"}),e.jsx(N,{mediaType:a,id:p.id})]}),e.jsx(o,{mediaDetails:p,mediaType:a})]}),e.jsx(I,{mediaType:a,data:p.genres,type:"Genres"}),e.jsx(I,{data:p.production_companies,type:"Production Companies",mediaType:a})]})]})]})},T=({mediaDetails:a,mediaType:t})=>{const s=x.getMediaTitle(a,t),l="movies"===t?a.release_date:a.first_air_date;return e.jsxs("p",{className:"text-3xl text-white",children:[s," (",l.split("-")[0],")"]})},I=({data:a,type:s,mediaType:l})=>{const{updateFilters:i,clearFilters:d}=f(),n=c();return e.jsxs("div",{className:"flex flex-col items-center md:flex-row bg-base-100 rounded-xl py-2 px-4 gap-x-2",children:[e.jsx("p",{className:"text-lg text-neutral-content dark:text-white whitespace-nowrap",children:s}),e.jsx("div",{className:"flex rounded-md shadow-sm gap-2 p-2 overflow-x-auto max-w-full",role:"group",children:a.map((a=>e.jsx("button",{className:"btn btn-sm md:btn-md btn-active btn-info",onClick:()=>(e=>{d();const a="Genres"===s?p.WITH_GENRES:p.WITH_COMPANIES;i(a,e.id.toString(),e.name),n(`${t.ENV.BASE_URL}media/${l}/discover`)})(a),children:a.name},a.id)))})]})},_=({mediaDetails:a})=>e.jsxs("div",{className:"flex flex-col items-center gap-y-5",children:[e.jsx(m,{className:"media-card-lg",imagePath:null==a?void 0:a.poster_path,alt:null==a?void 0:a.id.toString(),loading:"eager"}),void 0!==a.vote_average&&e.jsx(w,{actualRating:Math.ceil(Number((a.vote_average/2).toFixed(1))),totalRating:5,displayText:`${a.vote_average.toFixed(1)} / 10`})]}),C=({mediaType:a,mediaId:t})=>{const{isLoading:s,error:l,data:i}=h(a,t);if(!l)return e.jsxs("div",{className:"bg-neutral rounded-xl p-3",children:[e.jsx("p",{className:"text-3xl font-bold text-white font-sans py-2",children:"Recommendations"}),null!==l&&e.jsx("p",{className:"text-3xl text-red-500",children:"Something Went Wrong!"}),i&&0===i.results.length&&e.jsx("p",{className:"text-3xl text-red-500 text-center",children:"No Recommendations Found!"}),i&&i.results.length>0&&e.jsxs("div",{className:"flex gap-3 scrollbar-hidden",children:[e.jsx(g,{mediaList:i.results,mediaType:a}),s&&e.jsx(j,{count:20,className:"media-card"})]})]})},S=()=>{const a=c();return e.jsx("button",{onClick:()=>a(-1),className:"btn hover:btn-primary btn-neutral btn-sm lg:btn-md text-white font-bold py-2 px-4 rounded fixed right-5 bottom-5",children:"Back"})},E=({mediaType:a,mediaId:t})=>{const{openModal:i}=s.useContext(l),{isLoading:d,error:o,data:x}=n(a,t);return e.jsxs("div",{className:"bg-neutral rounded-xl p-3 shadow",children:[e.jsx("p",{className:"text-3xl font-bold text-white font-sans py-4",children:"Videos"}),d&&e.jsx(r,{}),null!==o&&e.jsx("p",{className:"text-3xl text-red-500",children:"Something Went Wrong!"}),x&&0===x.results.length&&e.jsx("p",{className:"text-3xl text-red-500 text-center",children:"No Videos Found!"}),x&&e.jsx("div",{className:"flex gap-3 overflow-x-auto",children:x.results.map((a=>e.jsxs("div",{className:"relative cursor-pointer",onClick:()=>(a=>{const t={name:a.name,id:a.key};i(e.jsx(y,{...t}))})(a),children:[e.jsx(m,{alt:a.name,imagePath:a.key,imageType:"YOUTUBE_THUMBNAIL",loading:"lazy",className:"card-horizontal rounded-xl"}),e.jsx("img",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10",src:"/movies-and-series/assets/play-DEuCVnC0.png",alt:"play"})]},a.key)))})]})},W=()=>{const{id:a,mediaType:t}=u();return e.jsxs("div",{className:"flex flex-col gap-5 p-3",children:[e.jsx(b,{mediaId:a,mediaType:t}),e.jsx(E,{mediaId:a,mediaType:t}),e.jsx(C,{mediaId:a,mediaType:t}),e.jsx(S,{})]})};export{W as default};
