(this["webpackJsonpmjn7597-react"]=this["webpackJsonpmjn7597-react"]||[]).push([[0],{22:function(t,e,a){},23:function(t){t.exports=JSON.parse("{}")},27:function(t,e,a){"use strict";a.r(e);var s=a(1),o=a.n(s),r=a(10),n=a.n(r),c=(a(22),a(5)),l=a(6),i=a(8),d=a(7),u=(a(9),a(23),a(11),a(3)),h=a(2),j=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(o.a.Fragment,{children:Object(h.jsx)("h1",{className:"header",children:"Nutrikit Food Planner"})})}}]),a}(o.a.Component),p=j,b=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(u.i,{className:"button",value:this.props.value,children:this.props.value})}}]),a}(o.a.Component),O=b,f=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).handleChange=function(t){console.log("this happens"),s.setState({value:t.target.value}),s.props.newCategory(t.target.value)},s.state={value:"proteins"},s}return Object(l.a)(a,[{key:"renderOptions",value:function(t){return Object(h.jsxs)(u.j,{className:"button",children:[Object(h.jsx)(O,{id:"foodGroupList",value:t[0]}),Object(h.jsx)(O,{id:"foodGroupList",value:t[1]}),Object(h.jsx)(O,{id:"foodGroupList",value:t[2]}),Object(h.jsx)(O,{id:"foodGroupList",value:t[3]}),Object(h.jsx)(O,{id:"foodGroupList",value:t[4]})]})}},{key:"render",value:function(){return Object(h.jsx)(u.j,{onClick:this.handleChange,className:"top",id:"foodGroupList",name:"foods",children:this.renderOptions(this.props.foodGroups)})}}]),a}(o.a.Component),g=a(15),x=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("option",{value:this.props.value,children:this.props.value},this.props.value)}}]),a}(o.a.Component),m=x,F=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).handleChange=function(t){var e=[];s.setState({value:t.target.value}),e.push(t.target.value),e.push(!1),s.props.handleMenuItemChange(e)},s.state={value:"proteins"},s}return Object(l.a)(a,[{key:"renderOptions",value:function(t){return Object(h.jsx)(o.a.Fragment,{children:function(){var e,a=[],s=Object(g.a)(t);try{for(s.s();!(e=s.n()).done;){var o=e.value;a.push(Object(h.jsx)(m,{value:o},o))}}catch(r){s.e(r)}finally{s.f()}return a}()})}},{key:"render",value:function(){return Object(h.jsx)(u.n,{onChange:this.handleChange,id:"foodbox",name:"foods",type:"select",size:"5",children:this.renderOptions(this.props.menuItems)})}}]),a}(o.a.Component),v=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(u.a,{block:!0,color:"success",onClick:this.props.onClick,id:"updateButton",type:"button",children:"add"})}}]),a}(o.a.Component),C=v,y=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).handleChange=function(e){var a=[];t.setState({value:e.target.value}),a.push(e.target.value),a.push(!0),t.props.handleMenuItemChange(a)},t}return Object(l.a)(a,[{key:"renderOptions",value:function(t){return Object(h.jsx)(o.a.Fragment,{children:function(){for(var e=[],a=0;a<t.length;a++)e.push(Object(h.jsx)(m,{value:t[a]},a));return e}()})}},{key:"render",value:function(){return Object(h.jsx)(u.n,{type:"select",onChange:this.handleChange,className:"selectBox h-100",id:"selectedBox",name:"selections",size:"5",children:this.renderOptions(this.props.selectedItems)})}}]),a}(o.a.Component),G=y,M=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(u.a,{block:!0,color:"danger",onClick:this.props.onClick,id:"updateButton",type:"button",children:"remove"})}}]),a}(o.a.Component),S=M,D=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(u.a,{size:"sm",color:"primary",onClick:this.props.handleEditPress,id:"editButton",type:"button",children:"Edit"})}}]),a}(o.a.Component),k=D,I=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(u.a,{onClick:this.props.handleDeletePress,size:"sm",color:"danger",children:"Delete"})}}]),a}(o.a.Component),N=I,w=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).handleEditPress=function(){s.props.toggleModal()},s.handleDeletePress=function(){s.props.toggleDeleteMessage()},s.capitalize=function(t){var e=t.toLowerCase();return t.charAt(0).toUpperCase()+e.slice(1)},s.state={isEdit:!1,newCalories:s.props.calories},s}return Object(l.a)(a,[{key:"getColor",value:function(t,e){switch(e){case"totalFat":return t<16?"text-nowrap text-success":"text-nowrap text-danger";case"protein":return t>2?"text-nowrap text-success":"text-nowrap text-danger";case"carbohydrates":return t<=55?"text-nowrap text-success":"text-nowrap text-danger";case"calories":return t<=400?"text-nowrap text-success":"text-nowrap text-danger"}}},{key:"render",value:function(){var t=this.capitalize(this.props.currSelectedFood);return Object(h.jsxs)(u.c,{className:"h-100",children:[Object(h.jsx)(u.d,{children:Object(h.jsxs)(u.g,{fluid:!0,children:[Object(h.jsx)(u.t,{children:t}),Object(h.jsx)(u.t,{className:"text-nowrap",children:"Nutrition Facts"}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.calories,"calories"),children:["Calories: ",this.props.calories]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalFat,"totalFat"),children:["Total Fat: ",this.props.totalFat]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalFat,"totalFat"),children:["Saturated Fat: ",this.props.saturatedFat]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalFat,"totalFat"),children:["Trans Fat: ",this.props.transFat]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.protein,"protein"),children:["Protein: ",this.props.protein]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.carbs,"carbohydrates"),children:["Carbs: ",this.props.carbs]})]})}),Object(h.jsx)(u.e,{children:Object(h.jsx)(u.g,{children:Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:6,className:"no-padding",children:Object(h.jsx)(k,{handleEditPress:this.handleEditPress})}),Object(h.jsx)(u.f,{xs:6,className:"no-padding ",children:Object(h.jsx)(N,{handleDeletePress:this.handleDeletePress})})]})})})]})}}]),a}(o.a.Component),T=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(u.a,{onClick:this.props.hanldeAddFoodItemPress,size:"sm",color:"primary",children:"Add Food Item"})}}]),a}(o.a.Component),P=T,A=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).hanldeAddFoodItemPress=function(){t.props.toggleAddFoodItemModal()},t}return Object(l.a)(a,[{key:"getColor",value:function(t,e){switch(e){case"totalFat":return t<16?"text-nowrap text-success":"text-nowrap text-danger";case"protein":return t>2?"text-nowrap text-success":"text-nowrap text-danger";case"carbohydrates":return t<=55?"text-nowrap text-success":"text-nowrap text-danger";case"calories":return t<=400?"text-nowrap text-success":"text-nowrap text-danger"}}},{key:"render",value:function(){return Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.d,{children:Object(h.jsxs)(u.g,{fluid:!0,children:[Object(h.jsx)(u.t,{children:"Total"}),Object(h.jsx)(u.t,{className:"text-nowrap",children:"Nutrition Facts"}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalCalories,"calories"),children:["Calories: ",this.props.totalCalories]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalFat,"totalFat"),children:["Total Fat: ",this.props.totalFat]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalFat,"totalFat"),children:["Saturated Fat: ",this.props.totalSaturatedFat]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalFat,"totalFat"),children:["Trans Fat: ",this.props.totalTransFat]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalProtein,"protein"),children:["Protein: ",this.props.totalProtein]}),Object(h.jsxs)(u.t,{className:this.getColor(this.props.totalCarbs,"carbohydrates"),children:["Carbs: ",this.props.totalCarbs]})]})}),Object(h.jsx)(u.e,{children:Object(h.jsx)(P,{hanldeAddFoodItemPress:this.hanldeAddFoodItemPress})})]})}}]),a}(o.a.Component),z=A,V=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).handleSubmit=function(e){e.preventDefault();var a=e.target;console.log("formData.calorieGoal.value = "+a.calorieGoal.value),console.log("formData.totalFatGoal.value = "+a.totalFatGoal.value),console.log("formData.proteinGoal.value = "+a.proteinGoal.value),console.log("formData.carbsGoal.value = "+a.carbsGoal.value),t.updateGoals(a.calorieGoal.value,a.totalFatGoal.value,a.proteinGoal.value,a.carbsGoal.value),t.props.toggle()},t.updateGoals=function(e,a,s,o){var r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({calorieValue:e,totalFatValue:a,proteinValue:s,carbValue:o})};fetch("/updateGoals",r).then((function(e){return t.getResponse(e)})).then((function(e){console.log(e),t.props.updateGoalData()})).catch((function(t){console.log(t)}))},t}return Object(l.a)(a,[{key:"getResponse",value:function(t){return 200===t.status?t.json():(console.log("HTTP error:"+t.status+":"+t.statusText),[["status ",t.status]])}},{key:"render",value:function(){return Object(h.jsxs)(u.o,{isOpen:this.props.isModalOpen,children:[Object(h.jsx)(u.r,{children:"Nutrition Goals"}),Object(h.jsxs)(u.l,{onSubmit:this.handleSubmit,children:[Object(h.jsx)(u.p,{children:Object(h.jsx)(u.m,{onSubmit:this.handleSubmit,children:Object(h.jsxs)(u.g,{fluid:!0,children:[Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Calorie Goal:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.calorieGoal,className:"mb-2",bsSize:"sm",id:"calorieGoal",name:"calorieGoal"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Total Fat Goal:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.totalFatGoal,className:"mb-2",bsSize:"sm",id:"totalFatGoal",name:"totalFatGoal"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Protein Goal:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.proteinGoal,className:"mb-2",bsSize:"sm",id:"proteinGoal",name:"proteinGoal"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Carbs Goal:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.carbGoal,bsSize:"sm",id:"carbsGoal",name:"carbsGoal"})})]})]})})}),Object(h.jsx)(u.q,{children:Object(h.jsx)(u.g,{fluid:!0,children:Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{children:Object(h.jsx)(u.a,{onClick:this.props.toggle,block:!0,children:"Back"})}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.a,{type:"submit",color:"success",block:!0,children:"Submit Change"})})]})})})]})]})}}]),a}(o.a.Component),B=V,R=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).capitalize=function(t){console.log("str: "+t);var e=t.toLowerCase();return t.charAt(0).toUpperCase()+e.slice(1)},t.handleSubmit=function(e){e.preventDefault();var a=e.target;console.log("formData.calories.value = "+a.calories.value),console.log("formData.totalFat.value = "+a.totalFat.value),console.log("formData.saturatedFat.value = "+a.saturatedFat.value),console.log("formData.transFat.value = "+a.transFat.value),console.log("formData.protein.value = "+a.protein.value),console.log("formData.carbohydrates.value = "+a.carbohydrates.value),t.updateFood(t.props.currSelectedFood,a.calories.value,a.totalFat.value,a.saturatedFat.value,a.transFat.value,a.protein.value,a.carbohydrates.value),t.props.toggleModal()},t.updateFood=function(e,a,s,o,r,n,c){var l={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({menuItem:e,calories:a,totalFat:s,saturatedFat:o,transFat:r,protein:n,carbohydrates:c})};fetch("/updateFood",l).then((function(e){return t.getResponse(e)})).then((function(a){console.log(a),t.props.refreshFoodData(e)})).catch((function(t){console.log(t)}))},t}return Object(l.a)(a,[{key:"getResponse",value:function(t){return 200===t.status?t.json():(console.log("HTTP error:"+t.status+":"+t.statusText),[["status ",t.status]])}},{key:"render",value:function(){var t=this.capitalize(this.props.currSelectedFood);return Object(h.jsxs)(u.o,{isOpen:this.props.isModalOpen,children:[Object(h.jsxs)(u.r,{className:"mx-auto",isOpen:this.props.isModalOpen,children:["Edit ",t," Nutrition Facts"]}),Object(h.jsxs)(u.l,{onSubmit:this.handleSubmit,children:[Object(h.jsx)(u.p,{children:Object(h.jsx)(u.m,{onSubmit:this.handleSubmit,children:Object(h.jsxs)(u.g,{fluid:!0,children:[Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Calories:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.calories,className:"mb-2",bsSize:"sm",id:"caloriesInput",name:"calories"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Total Fat:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.totalFat,className:"mb-2",bsSize:"sm",id:"totalFatInput",name:"totalFat"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Saturated Fat:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.saturatedFat,className:"mb-2",bsSize:"sm",id:"saturatedFatInput",name:"saturatedFat"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Trans Fat:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.transFat,className:"mb-2",bsSize:"sm",id:"transFatInput",name:"transFat"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Protein:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.protein,className:"mb-2",bsSize:"sm",id:"proteinInput",name:"protein"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Carbohydrates:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{defaultValue:this.props.carbs,className:"mb-2",bsSize:"sm",id:"carbohydratessInput",name:"carbohydrates"})})]})]})})}),Object(h.jsx)(u.q,{children:Object(h.jsx)(u.g,{fluid:!0,children:Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{children:Object(h.jsx)(u.a,{onClick:this.props.toggleModal,block:!0,children:"Cancel"})}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.a,{type:"submit",color:"success",block:!0,children:"Submit"})})]})})})]})]})}}]),a}(o.a.Component),E=R,L=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).deleteFood=function(e){var a={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({menuItem:e})};fetch("/deleteFood",a).then((function(e){return t.getResponse(e)})).then((function(e){console.log(e),t.props.toggleDeleteMessage(),t.props.refreshMenuItems(t.props.category)})).catch((function(t){console.log(t)}))},t}return Object(l.a)(a,[{key:"getResponse",value:function(t){return 200===t.status?t.json():(console.log("HTTP error:"+t.status+":"+t.statusText),[["status ",t.status]])}},{key:"render",value:function(){var t=this;return Object(h.jsxs)(u.o,{isOpen:this.props.isModalOpen,children:[Object(h.jsxs)(u.r,{children:["Are you sure want to remove ",this.props.currSelectedFood," from your recorded food items?"]}),Object(h.jsx)(u.p,{children:"This can not be reversed"}),Object(h.jsx)(u.q,{children:Object(h.jsx)(u.g,{fluid:!0,children:Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{children:Object(h.jsx)(u.a,{onClick:this.props.toggleDeleteMessage,block:!0,children:"Cancel"})}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.a,{onClick:function(){return t.deleteFood(t.props.currSelectedFood)},color:"danger",block:!0,children:"Delete"})})]})})})]})}}]),a}(o.a.Component),J=L,H=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).handleSubmit=function(t){t.preventDefault();var e=t.target;console.log("formData.FoodItemName.value "+e.foodItemName.value),console.log("formData.category.value "+s.state.dropDownValue),console.log("formData.calories.value "+e.calories.value),console.log("formData.totalFat.value = "+e.totalFat.value),console.log("formData.saturatedFat.value = "+e.saturatedFat.value),console.log("formData.transFat.value = "+e.transFat.value),console.log("formData.protein.value = "+e.protein.value),console.log("formData.carbohydrates.value = "+e.carbohydrates.value),s.addFood(e.foodItemName.value,s.state.dropDownValue,e.calories.value,e.totalFat.value,e.saturatedFat.value,e.transFat.value,e.protein.value,e.carbohydrates.value),s.props.toggleAddFoodItemModal()},s.dropDownToggle=function(){s.setState({isDropDownOpen:!s.state.isDropDownOpen})},s.handleDropDownChange=function(t){s.setState({dropDownValue:t})},s.addFood=function(t,e,a,o,r,n,c,l){var i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({menuItem:t,category:e,calories:a,totalFat:o,saturatedFat:r,transFat:n,protein:c,carbohydrates:l})};fetch("/addFood",i).then((function(t){return s.getResponse(t)})).then((function(t){console.log(t),s.props.refreshMenuItems()})).catch((function(t){console.log(t)}))},s.state={isDropDownOpen:!1,dropDownValue:"Proteins"},s}return Object(l.a)(a,[{key:"getResponse",value:function(t){return 200===t.status?t.json():(console.log("HTTP error:"+t.status+":"+t.statusText),[["status ",t.status]])}},{key:"render",value:function(){var t=this;return Object(h.jsxs)(u.o,{isOpen:this.props.isAddFoodItemModalOpen,children:[Object(h.jsx)(u.r,{className:"mx-auto",children:"Add New Food"}),Object(h.jsxs)(u.l,{onSubmit:this.handleSubmit,children:[Object(h.jsx)(u.p,{children:Object(h.jsx)(u.m,{onSubmit:this.handleSubmit,children:Object(h.jsxs)(u.g,{fluid:!0,children:[Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Food Name:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{placeholder:"Pineapples",defaultValue:"",className:"mb-2",bsSize:"sm",id:"foodItemName",name:"foodItemName"})})]}),Object(h.jsxs)(u.t,{className:"mb-2",children:[Object(h.jsx)(u.f,{xs:5,children:"Category:"}),Object(h.jsx)(u.f,{children:Object(h.jsxs)(u.h,{name:"category",toggle:this.dropDownToggle,isOpen:this.state.isDropDownOpen,children:[Object(h.jsx)(u.k,{caret:!0,block:!0,size:"sm",color:"primary",onClick:this.dropDownToggle,"aria-expanded":this.state.isDropDownOpen,"data-toggle":"dropdown",children:this.state.dropDownValue}),Object(h.jsxs)(u.j,{id:"category",name:"category",children:[Object(h.jsx)(u.i,{onClick:function(){return t.handleDropDownChange(t.props.foodGroups[0])},id:"category",value:this.props.foodGroups[0],children:this.props.foodGroups[0]}),Object(h.jsx)(u.i,{onClick:function(){return t.handleDropDownChange(t.props.foodGroups[1])},id:"category",value:this.props.foodGroups[1],children:this.props.foodGroups[1]}),Object(h.jsx)(u.i,{onClick:function(){return t.handleDropDownChange(t.props.foodGroups[2])},id:"category",value:this.props.foodGroups[2],children:this.props.foodGroups[2]}),Object(h.jsx)(u.i,{onClick:function(){return t.handleDropDownChange(t.props.foodGroups[3])},id:"category",value:this.props.foodGroups[3],children:this.props.foodGroups[3]}),Object(h.jsx)(u.i,{onClick:function(){return t.handleDropDownChange(t.props.foodGroups[4])},id:"category",value:this.props.foodGroups[4],children:this.props.foodGroups[4]})]})]})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Calories:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{placeholder:"0",defaultValue:0,className:"mb-2",bsSize:"sm",id:"caloriesInput",name:"calories"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Total Fat:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{placeholder:"0",defaultValue:0,className:"mb-2",bsSize:"sm",id:"totalFatInput",name:"totalFat"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Saturated Fat:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{placeholder:"0",defaultValue:0,className:"mb-2",bsSize:"sm",id:"saturatedFatInput",name:"saturatedFat"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Trans Fat:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{placeholder:"0",defaultValue:0,className:"mb-2",bsSize:"sm",id:"transFatInput",name:"transFat"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Protein:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{placeholder:"0",defaultValue:0,className:"mb-2",bsSize:"sm",id:"proteinInput",name:"protein"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:5,children:"Carbohydrates:"}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.n,{placeholder:"0",defaultValue:0,className:"mb-2",bsSize:"sm",id:"carbohydratessInput",name:"carbohydrates"})})]})]})})}),Object(h.jsx)(u.q,{children:Object(h.jsx)(u.g,{fluid:!0,children:Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{children:Object(h.jsx)(u.a,{onClick:this.props.toggleAddFoodItemModal,block:!0,children:"Cancel"})}),Object(h.jsx)(u.f,{children:Object(h.jsx)(u.a,{type:"submit",color:"success",block:!0,children:"Submit"})})]})})})]})]})}}]),a}(o.a.Component),q=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(u.c,{className:"h-100",children:[Object(h.jsx)(u.d,{children:Object(h.jsxs)(u.g,{fluid:!0,className:"no-padding",children:[Object(h.jsx)(u.s,{className:"mb-2",value:this.props.calorieProgress,children:"Calories"}),Object(h.jsx)(u.s,{className:"mb-2",value:this.props.totalFatProgress,children:"Total Fat"}),Object(h.jsx)(u.s,{className:"mb-2",value:this.props.proteinProgress,children:"Protein"}),Object(h.jsx)(u.s,{value:this.props.carbProgress,children:"Carbs"})]})}),Object(h.jsx)(u.e,{className:"d-flex justify-content-center",children:Object(h.jsx)(u.a,{onClick:this.props.toggle,size:"sm",color:"success",children:"Change Goals"})})]})}}]),a}(o.a.Component),U=q,K=["proteins","fruits","vegetables","dairy","grains"],Q=function(t){Object(i.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).updateData=function(t){s.setState({data:t}),console.log("data: "+s.state.data)},s.updateGoalData=function(t){s.setState({calorieGoal:t[0],totalFatGoal:t[1],proteinGoal:t[2],carbGoal:t[3]})},s.fetchData=function(){fetch("/fetchData").then((function(t){return s.getResponse(t)})).then((function(t){s.updateData(t)})).catch((function(t){console.log(t),s.updateData("")}))},s.fetchGoalData=function(){fetch("/fetchGoalData").then((function(t){return s.getResponse(t)})).then((function(t){s.updateGoalData(t)})).catch((function(t){console.log(t)}))},s.fetchFoodData=function(t){fetch("/getFood/"+t).then((function(t){return s.getResponse(t)})).then((function(t){s.setState({currMenuSelection:t[1],currCalories:t[3],currTotalFat:t[4],currSaturatedFat:t[5],currTransFat:t[6],currProtein:t[7],currCarbs:t[8]})})).catch((function(t){console.log(t)}))},s.fetchFoodsByCategory=function(t){console.log("category: "+t),fetch("/getFoodsByCategory/"+t).then((function(t){return s.getResponse(t)})).then((function(t){s.setState({menuItems:t})})).catch((function(t){console.log(t)}))},s.newCategory=function(t){s.fetchFoodsByCategory(t),s.setState({category:t}),console.log("category: "+s.state.category+"| menuItems: "+s.state.menuItems)},s.handleMenuItemChange=function(t){s.fetchFoodData(t[0]),s.setState({currMenuSelection:t[0],deselect:t[1]})},s.toggle=function(){s.setState({dropdownOpen:!s.state.dropdownOpen})},s.addItemButtonClick=function(){var t=s.state.selectedItems,e=s.state.totalCalories,a=s.state.totalFat,o=s.state.totalSaturatedFat,r=s.state.totalTransFat,n=s.state.totalProtein,c=s.state.totalCarbs;t.push(s.state.currMenuSelection),e+=Math.round(s.state.currCalories),a+=Math.round(s.state.currTotalFat),o+=Math.round(s.state.currSaturatedFat),r+=Math.round(s.state.currTransFat),n+=Math.round(s.state.currProtein),c+=Math.round(s.state.currCarbs),s.setState({selectedItems:t,totalCalories:e,totalFat:a,totalSaturatedFat:o,totalTransFat:r,totalProtein:n,totalCarbs:c})},s.removeItemClick=function(){for(var t=s.state.selectedItems,e=s.state.currMenuSelection,a=s.state.totalCalories,o=s.state.totalFat,r=s.state.totalSaturatedFat,n=s.state.totalTransFat,c=s.state.totalProtein,l=s.state.totalCarbs,i=0;i<t.length;i++)if(t[i]===e){t.splice(i,1),a-=Math.round(s.state.currCalories),o-=Math.round(s.state.currTotalFat),r-=Math.round(s.state.currSaturatedFat),n-=Math.round(s.state.currTransFat),c-=Math.round(s.state.currProtein),l-=Math.round(s.state.currCarbs);break}s.setState({selectedItems:t,totalCalories:a,totalFat:o,totalSaturatedFat:r,totalTransFat:n,totalProtein:c,totalCarbs:l})},s.handleSubmit=function(t){t.preventDefault(),s.setState({calorieGoal:t.target.caloriesInput.value})},s.toggleModal=function(){s.setState({isModalOpen:!s.state.isModalOpen})},s.toggleDeleteMessage=function(){s.setState({isDeleteModalOpen:!s.state.isDeleteModalOpen}),console.log("toggleDeleteMessage: "+s.state.isDeleteModalOpen)},s.toggleAddFoodItemModal=function(){s.setState({isAddFoodItemModalOpen:!s.state.isAddFoodItemModalOpen}),console.log("toggleAddFoodItemModal: "+s.state.isAddFoodItemModalOpen)},s.toggleChangeGoalModal=function(){s.setState({isChangeGoalModalOpen:!s.state.isChangeGoalModalOpen}),console.log("toggleChangeGoalModal: "+s.state.isChangeGoalModalOpen)},s.state={category:"",menuItems:"",foodGroups:K,currMenuSelection:"",currCalories:0,currTotalFat:0,currSaturatedFat:0,currTransFat:0,currProtein:0,currCarbs:0,selectedItems:[],deselect:!1,dropdownOpen:!1,calorieGoal:0,totalFatGoal:0,proteinGoal:0,carbGoal:0,totalCalories:0,totalFat:0,totalSaturatedFat:0,totalTransFat:0,totalProtein:0,totalCarbs:0,data:"",isModalOpen:!1,isDeleteModalOpen:!1,isAddFoodItemModalOpen:!1,isChangeGoalModalOpen:!1},s}return Object(l.a)(a,[{key:"getResponse",value:function(t){return 200===t.status?t.json():(console.log("HTTP error:"+t.status+":"+t.statusText),[["status ",t.status]])}},{key:"componentDidMount",value:function(){this.fetchData(),this.fetchGoalData()}},{key:"render",value:function(){return Object(h.jsxs)(u.g,{fluid:!0,children:[Object(h.jsx)(E,{isModalOpen:this.state.isModalOpen,currSelectedFood:this.state.currMenuSelection,calories:this.state.currCalories,totalFat:this.state.currTotalFat,saturatedFat:this.state.currSaturatedFat,transFat:this.state.currTransFat,protein:this.state.currProtein,carbs:this.state.currCarbs,toggleModal:this.toggleModal,refreshFoodData:this.fetchFoodData}),Object(h.jsx)(J,{isModalOpen:this.state.isDeleteModalOpen,currSelectedFood:this.state.currMenuSelection,toggleDeleteMessage:this.toggleDeleteMessage,refreshMenuItems:this.fetchFoodsByCategory,category:this.state.category}),Object(h.jsx)(H,{isAddFoodItemModalOpen:this.state.isAddFoodItemModalOpen,toggleAddFoodItemModal:this.toggleAddFoodItemModal,foodGroups:this.state.foodGroups,refreshMenuItems:this.fetchFoodsByCategory}),Object(h.jsx)(B,{isModalOpen:this.state.isChangeGoalModalOpen,toggle:this.toggleChangeGoalModal,calorieGoal:this.state.calorieGoal,totalFatGoal:this.state.totalFatGoal,proteinGoal:this.state.proteinGoal,carbGoal:this.state.carbGoal,updateGoalData:this.fetchGoalData}),Object(h.jsx)(u.t,{children:Object(h.jsx)(p,{})}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{className:"class-col",xs:6,children:Object(h.jsx)("h6",{children:"Categories"})}),Object(h.jsx)(u.f,{className:"class-col",xs:6,children:Object(h.jsx)("h6",{children:"MenuItems"})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{className:"class-col",xs:6,children:Object(h.jsxs)(u.b,{className:"button",toggle:this.toggle,isOpen:this.state.dropdownOpen,children:[Object(h.jsx)(u.k,{caret:!0,className:"button",onClick:this.toggle,"aria-expanded":this.state.dropdownOpen,"data-toggle":"dropdown",children:"Food Categories"}),Object(h.jsx)(f,{className:"button",newCategory:this.newCategory,foodGroups:this.state.foodGroups})]})}),Object(h.jsx)(u.f,{className:"class-col",xs:6,children:Object(h.jsx)(F,{handleMenuItemChange:this.handleMenuItemChange,category:this.state.category,menuItems:this.state.menuItems})}),Object(h.jsx)(u.f,{className:"row-padding",xs:6,children:Object(h.jsx)("p",{children:Object(h.jsx)(C,{onClick:this.addItemButtonClick})})}),Object(h.jsx)(u.f,{className:"row-padding",xs:6,children:Object(h.jsx)(S,{onClick:this.removeItemClick})})]}),Object(h.jsxs)(u.t,{children:[Object(h.jsx)(u.f,{xs:6,children:Object(h.jsx)(G,{handleMenuItemChange:this.handleMenuItemChange,selectedItems:this.state.selectedItems})}),Object(h.jsx)(u.f,{children:Object(h.jsx)(U,{calorieProgress:this.state.totalCalories/this.state.calorieGoal*100,totalFatProgress:this.state.totalFat/this.state.totalFatGoal*100,proteinProgress:this.state.totalProtein/this.state.proteinGoal*100,carbProgress:this.state.totalCarbs/this.state.carbGoal*100,toggle:this.toggleChangeGoalModal})})]}),Object(h.jsxs)(u.t,{className:"row-padding",children:[Object(h.jsx)(u.f,{xs:6,children:Object(h.jsx)(z,{totalCalories:this.state.totalCalories,totalFat:this.state.totalFat,totalSaturatedFat:this.state.totalSaturatedFat,totalTransFat:this.state.totalTransFat,totalProtein:this.state.totalProtein,totalCarbs:this.state.totalCarbs,toggleAddFoodItemModal:this.toggleAddFoodItemModal})}),Object(h.jsx)(u.f,{xs:6,children:Object(h.jsx)(w,{toggleModal:this.toggleModal,toggleDeleteMessage:this.toggleDeleteMessage,currSelectedFood:this.state.currMenuSelection,calories:Math.round(this.state.currCalories),totalFat:Math.round(this.state.currTotalFat),saturatedFat:Math.round(this.state.currSaturatedFat),transFat:Math.round(this.state.currTransFat),protein:Math.round(this.state.currProtein),carbs:Math.round(this.state.currCarbs)})})]})]})}}]),a}(o.a.Component),W=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(e){var a=e.getCLS,s=e.getFID,o=e.getFCP,r=e.getLCP,n=e.getTTFB;a(t),s(t),o(t),r(t),n(t)}))};n.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),W()},9:function(t,e,a){}},[[27,1,2]]]);
//# sourceMappingURL=main.bb490ff8.chunk.js.map