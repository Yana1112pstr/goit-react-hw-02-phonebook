(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__2hu76",input:"Filter_input__304xB"}},13:function(t,e,n){t.exports={section:"Section_section__2PRzt"}},2:function(t,e,n){t.exports={item:"Contacts_item__3oruS",contact:"Contacts_contact__1pTNx",contactItem:"Contacts_contactItem__3Ea_t",button:"Contacts_button__1RD1b"}},20:function(t,e,n){},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),i=(n(20),n(15)),o=n(6),u=n(7),l=n(9),m=n(8),b=(n(21),n(13)),d=n.n(b),h=n(0),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.section,children:e})},p=n(14),f=n(4),x=n.n(f),O=n(3),C=n.n(O),v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=C.a.generate(),t.numberInputId=C.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),console.log("state",t.state),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:x.a.form,children:[Object(h.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:this.handleChange,id:this.nameInputId,className:x.a.input})]}),Object(h.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n,onChange:this.handleChange,id:this.numberInputId,className:x.a.input})]}),Object(h.jsx)("button",{type:"Submit",className:x.a.button,children:"Add contact"})]})}}]),n}(a.Component),_=v,g=n(2),N=n.n(g),I=function(t){var e=t.visibleContacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{children:e().map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:N.a.item,children:[Object(h.jsxs)("span",{className:N.a.contact,children:["Name:",Object(h.jsx)("span",{className:N.a.contactItem,children:a})]}),Object(h.jsxs)("span",{className:N.a.contact,children:["Number:",Object(h.jsx)("span",{className:N.a.contactItem,children:c})]}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(e)},className:N.a.button,children:"Delete"})]},e)}))})},F=n(11),y=n.n(F),S=function(t){var e=t.value,n=t.changeFilter;return Object(h.jsx)("form",{children:Object(h.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",value:e,onChange:n,className:y.a.input})]})})},w=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:C.a.generate(),name:n,number:a};t.state.contacts.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.visibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter,c=a.toLowerCase();return n.filter((function(t){return t.name.includes(a)})),n.filter((function(t){return t.name.toLowerCase().includes(c)||t.number.includes(c)}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)(j,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(_,{onSubmit:this.addContact})]}),Object(h.jsxs)(j,{children:[Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(S,{value:this.state.value,changeFilter:this.changeFilter}),Object(h.jsx)(I,{visibleContacts:this.visibleContacts,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),A=w,k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),k()},4:function(t,e,n){t.exports={form:"Form_form__3xwQ9",input:"Form_input__336HV",button:"Form_button__azecP"}}},[[31,1,2]]]);
//# sourceMappingURL=main.00312209.chunk.js.map