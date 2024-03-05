import{r as i,j as e}from"./index-Zz5Amz2k.js";import{u as f,S as g}from"./ScrollToTopButton-rNLqiHEF.js";import{M as h}from"./MediaSelector-iSlzvFfj.js";import{M as j}from"./MediaList-GvohxPok.js";import{c as b}from"./TmdbQueries-4zrcDeNl.js";import{E as y}from"./ErrorPage-4yLxP1qc.js";function S(t,s){const[r,n]=i.useState(t);return i.useEffect(()=>{const a=setTimeout(()=>n(t),s||500);return()=>{clearTimeout(a)}},[t,s]),r}const v=({params:t,setParams:s,mediaType:r,setMediaType:n,className:a=""})=>{const[o,u]=i.useState(""),c=S(o,700);return i.useEffect(()=>{s({...t,query:c})},[c]),e.jsxs("div",{className:`flex gap-3 bg-base-100 p-5 w-full justify-center border-black rounded-lg items-center ${a}`,children:[e.jsx("input",{type:"text",placeholder:"Search...",id:"search-input",className:"input input-bordered w-full max-w-xs input-sm md:input-md",value:o,onChange:l=>u(l.target.value)}),e.jsx(h,{mediaType:r,setMediaType:n})]})},P=()=>{const{ref:t,inView:s}=f(),[r,n]=i.useState("movies"),[a,o]=i.useState({page:1,query:"",include_adult:!1}),{data:u,error:c,fetchNextPage:l,isFetching:d,isFetchingNextPage:m}=b(r,a);return i.useEffect(()=>{s&&a.query.length>0&&l()},[s]),c?e.jsx(y,{}):e.jsxs("div",{className:"p-3 space-y-3",children:[e.jsx("p",{className:"text-2xl md:text-3xl font-bold text-center py-3 text-neutral-content",children:"Search For Movies And TV Series"}),e.jsx(v,{className:"p-3",params:a,setParams:o,mediaType:r,setMediaType:n}),u!==void 0&&e.jsx("div",{className:"flex flex-wrap gap-3 justify-center bg-neutral rounded-xl p-3",children:u.pages.map((p,x)=>e.jsx(j,{mediaList:p.results,mediaType:r,isLoading:d||m},x))}),e.jsx("div",{id:"observer",ref:t}),e.jsx(g,{})]})};export{P as default};