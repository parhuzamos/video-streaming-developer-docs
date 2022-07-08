"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8371],{95489:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return o}});var n=a(63366),l=(a(67294),a(64983)),r=a(55602),i=["components"],d={},p={_frontmatter:d},m=r.Z;function o(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)(m,Object.assign({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Get the display settings of the custom metadata fields"),(0,l.kt)("p",null,"Get information on how custom metadata is displayed on the channel page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/custom-metadata-display.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value structures."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata_displays")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the display settings of custom metadata fields (see below)")))),(0,l.kt)("p",null,"The array of data for ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata_displays")," contains the following key-value structures."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"channel_id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The unique id of the channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"field_id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The unique id of the custom metadata field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is_link")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Value is ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if the field is a link to similar content")))),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Set the display settings of a custom metadata field"),(0,l.kt)("p",null,"Set how a custom metadata field is displayed on the channel page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channel_id}/custom-metadata-display/{field_id}.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"The parameters for the PUT request:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is_link")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("td",{parentName:"tr",align:null},"Value is ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if the field is a link to similar content")))),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success, a response with HTTP status “204 No Content” is returned."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bad_request")),(0,l.kt)("td",{parentName:"tr",align:null},"A required parameter is missing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom metadata field not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Remove a metadata field from channel page"),(0,l.kt)("p",null,"Delete the display settings of a custom metadata field and remove the field from the channel page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE https://api.video.ibm.com/channels/{channel_id}/custom-metadata-display/{field_id}.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"402 Payment Required"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invalid_request")),(0,l.kt)("td",{parentName:"tr",align:null},"The user does not have the benefit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom metadata field not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-channel-page-design-displaying-metadata-mdx-1e115f2013d521fc1cc8.js.map