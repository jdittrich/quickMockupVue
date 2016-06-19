//============helpers============================
function helperIdToObject(elements, id){
	var element = elements.find(function(element){
		return element.l_id === id;
	});
	return element;
}


function helperFindParentObject(possibleParents, childElement){
	var parent = possibleParents.find(function(possibleParent){
		return possibleParent.children.includes(childElement.l_id);
	});
	return parent;
}


//============actions============================

export  function addElement(store,futureParentId,rect,widgettype){
	store.dispatch("ADDELEMENT",futureParentId,rect,widgettype);
}


export  function deleteElement(store,element){
	store.dispatch("DELETEELEMENT",element);
}

export function changeRect(store, element, changedRect){
	store.dispatch("CHANGERECT",element,changedRect);
	/*naming is hard here. First I had seperate position/dimension functions, but if the user e.g. changes the width to the right, I need adjust the position as well */
}

export function moveWidget(store,elementToMoveId,futureParentId){
	console.log("iamstore",store);
	store.dispatch("MOVEWIDGET",elementToMoveId,futureParentId);
	// var elementToMove = helperIdToObject(store.state.elements,elementToMoveId);
	// var currentParent = helperFindParentObject(store.state.elements,elementToMove);
	// var futureParent = helperIdToObject(store.state.elements, futureParentId);
	//
	// store.dispatch("DETACH",currentParent,elementToMove);
	// store.dispatch("ATTACH",futureParent,elementToMove);
}
