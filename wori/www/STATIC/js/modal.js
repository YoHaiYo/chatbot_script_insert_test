let modalHistory = [];
var modalDialog = {
    timer : 300,
    confirm : function(id, callback){
        if(callback == null || typeof callback != 'function'){
            console.log("callback is null or not function.");
            return;
        }else{
        	if(id == null || id.trim() == ""){
	            console.log("not property is "+ id);
	            return;
	        }else{
	            $(`${id} .submit`).on("click", function(){
	                //$(this).unbind("click");
	                modalDialog.close(this);
                    modalHistory = [];
	                callback(true);
	            });
	            this.open(id);
	        }
        }
    },

    open : function(target){
    	var modal = $(target).closest('.modal-dialog');
        var modal_content = modal.find(target);
        var dimLayer = modal_content.closest('.modal-dialog').find('.dim');

        // 히스토리
        if(modalHistory.length == 0){
            timer = this.timer;
        } else {
             timer = 0;
        }
        $('body').css('overflow', 'hide');
        modal.fadeIn(timer);
        dimLayer.fadeIn(timer);
        modal_content.fadeIn(timer);
    },

    close: function (target, destroy = true) {
        var modal = $(target).closest(".modal-dialog");
        var modal_content = modal.find('.modal-content');
        var dimLayer = modal.find('.dim');

        // boolean
        if(destroy){
            this.removHistory(modalHistory.length-1);
        }

        // 히스토리
        if(modalHistory.length == 0){
             timer = this.timer;
             $('body').css('overflow', 'auto');
        } else {
             timer = 0;
        }

        modal.fadeOut(timer);
        dimLayer.fadeOut(timer);
        modal_content.fadeOut(timer);
    },

    prevHistory: function(index){
        this.confirm(modalHistory[index].id, modalHistory[index].callback);
    },
    addHistory: function(id, callback){
        modalHistory.push({
            id: id,
            callback: callback,
        });
    },
    removHistory: function(index){
        modalHistory.splice(index, 1);
    },

};

function _showModal(btnName, modalId, callback) {
    $(btnName).on('click', function (e) {
        modalDialog.confirm(modalId, function (res) {
            if (res) {
                if (callback) {
                    callback(e);
                }
            }
        });
        modalDialog.addHistory(modalId, callback);
    });
}

$( function (){
    $('.modal-dialog').on('click', function(e){
        if(e.target.matches('.modal-dialog') || e.target.matches('.dim') || e.target.matches('.modal-content')){
            modalDialog.close(this);
            if(modalHistory.length-1 >= 0){
                modalDialog.prevHistory(modalHistory.length-1);
            }
        }
    });
	$(".modal-dialog .closer").on("click", function () {
        modalDialog.close(this);
    });
    $(".modal-dialog .cancel").on("click", function () {
        modalDialog.close(this);
    });
    $(".modal-dialog .modal-prev").on("click", function () {
        modalDialog.close(this);
        if(modalHistory.length-1 >= 0){
            modalDialog.prevHistory(modalHistory.length-1);
        }
    });
});
