;(function($, window , document, undefined){

    var Movdiv = {

    init: function(options, elem){
            var self = this;
            self.elem = elem;
            self.$elem = $(elem);
            self.options = $.extend ({},$.fn.ap_movdiv.options,options);            
            this.move.apply(elem,[self.options]);

        },


     move: function(options){    
            var self = this;
            var anim = (options.anim===undefined)?[]:options.anim;
            var ranim = (options.ranim===undefined)?[]:options.ranim;//return animation
            var duration = options.duration;
            var rduration = options.rduration; // return duration
            rduration = (rduration===undefined)?duration:rduration;
            anim[options.direction] = options.distance;
            ranim[options.direction] = options.rdistance;
            $(self).on(options.eventType, function(){
                       $(self).animate(anim,duration, function(){ 
                            if(typeof (options.halfComplete)==='function'){
                                        options.halfComplete();
                                    };     
                            $(self).animate(ranim,rduration, options.onComplete)
            
                            });
                        });
            
                }, // end of move;

        }


    $.fn.ap_movdiv = function(options){
            return this.each(function(){
                var movdiv = Object.create(Movdiv);

                movdiv.init(options, this);
                

            });
        }

    $.fn.ap_movdiv.options = {
        eventType : 'mouseenter',
        direction: 'left',
        duration : 500,
        distance : '50px',
        rdistance: 0,
        halfComplete:null,
        onComplete:null,
      
    }             

    })(jQuery, window,document)