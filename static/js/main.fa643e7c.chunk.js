(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{32:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(7),i=n.n(o),l=n(9),u=n(15),s=n(3),b=n(4),d=n(16),j=n.n(d),m=n(17),f=n.n(m),O=n(5),h=n(18),p=n(2),C={addToContact:Object(s.b)("contact/Submit"),deleteContact:Object(s.b)("contact/Delete"),filterContact:Object(s.b)("contact/inputChange")},x=Object(s.c)([],(c={},Object(O.a)(c,C.addToContact,(function(t,e){var n=e.payload;return[].concat(Object(h.a)(t),[n])})),Object(O.a)(c,C.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),v=Object(s.c)("",Object(O.a)({},C.filterContact,(function(t,e){return e.payload}))),g=Object(p.b)({contact:x,inputValue:v}),k={key:"root",storage:j.a,blacklist:["inputValue"]},y=Object(s.a)({reducer:Object(b.g)(k,g),middleware:function(t){return t({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}}).concat(f.a)},devTools:!1}),w={store:y,persistor:Object(b.h)(y)},N=(n(32),n(12)),T=n(36),A=n(13),S=n(1);function _(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(A.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),l=Object(A.a)(i,2),u=l[0],s=l[1],b=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":s(c);break;default:return}},d=function(){o(""),s("")};return Object(S.jsx)("div",{className:"inner_form",children:Object(S.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,number:u}),d()},className:"form",children:[Object(S.jsx)("label",{htmlFor:"name",children:"Name"}),Object(S.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:b}),Object(S.jsx)("label",{htmlFor:"number",children:"Number"}),Object(S.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:b}),Object(S.jsx)("button",{className:"btn_form",type:"submit",children:"Add contact"})]})})}var z=function(t){var e=t.filter,n=t.filterContact;return Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),Object(S.jsx)("input",{type:"text",name:"filter",onChange:n,value:e})]})},D=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(S.jsx)("ul",{className:"contact_list",children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(S.jsxs)("li",{className:"contact_list_item",children:[Object(S.jsxs)("p",{className:"contact_name",children:[c,": ",a]}),Object(S.jsx)("button",{className:"contact_btn",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};var V=Object(l.b)((function(t){return{contacts:t.contact,inputValue:t.inputValue}}),(function(t){return{addToContact:function(e){return t(C.addToContact(e))},deleteContact:function(e){return t(C.deleteContact(e))},filterContact:function(e){return t(C.filterContact(e.currentTarget.value))}}}))((function(t){var e=t.contacts,n=t.inputValue,c=t.addToContact,a=t.deleteContact,r=t.filterContact;return Object(S.jsxs)("div",{className:"phonebook",children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(_,{onSubmit:function(t){var n=Object(N.a)(Object(N.a)({},t),{},{id:Object(T.a)()});e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):c(n)}}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(z,{filter:n,filterContact:r}),Object(S.jsx)(D,{contacts:e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})),onDeleteContact:a})]})}));i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(l.a,{store:w.store,children:Object(S.jsx)(u.a,{loading:null,persistor:w.persistor,children:Object(S.jsx)(V,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fa643e7c.chunk.js.map