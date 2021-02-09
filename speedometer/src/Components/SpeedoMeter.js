import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from 'jquery'
class SpeedoMeter extends Component {
  // testVarible = 0;

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      testVarible : 0
    }
 }
 componentDidMount() {
  window.addEventListener('load', this.handleLoad);
}
 handleLoad() {
 var testVarible;
 var spdvalue;
  this.setState({ spdvalue : testVarible++}) ;
    $("#dgear").addClass("Drive");
    var initDegree=-120;
    var lastDegree=120;
    var rotateDeg;
    if(spdvalue <= 240){
      rotateDeg=initDegree+Math.round(spdvalue/2);
      
      }
    else if(spdvalue > 240 && spdvalue < 480 ){
      
      rotateDeg=Math.round(spdvalue/2)-lastDegree;
      
      }
      
      else{
        alert("Wrong Value")
        
        }
      $("#sui").css('-webkit-transform','rotate(-120deg)');
        
        
        
      $("#sui").css( { transition: "transform 3s",
                transform:  "rotate(" + rotateDeg + "deg)" } )
      $("#SUICIRCLE").css( { transition: "transform 3s",
                transform:  "rotate(" + rotateDeg + "deg)" } )
  
      setTimeout( function() { $("#sui").css( { transition: "none" } ) }, 3000 );
      setTimeout( function() { $("#SUICIRCLE").css( { transition: "none" } ) }, 3000 );
      
    
  /*Counter*/
  (function($) {
  $.fn.countTo = function(options) {
    // merge the default plugin settings with the custom options
    options = $.extend({}, $.fn.countTo.defaults, options || {});
  
    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;
  
    return $(this).each(function() {
        var _this = this,
            loopCount = 0,
            value = options.from,
            interval = setInterval(updateTimer, options.refreshInterval);
  
        function updateTimer() {
            value += increment;
            loopCount++;
            $(_this).html(value.toFixed(options.decimals));
  
            if (typeof(options.onUpdate) == 'function') {
                options.onUpdate.call(_this, value);
            }
  
            if (loopCount >= loops) {
                clearInterval(interval);
                value = options.to;
  
                if (typeof(options.onComplete) == 'function') {
                    options.onComplete.call(_this, value);
                }
            }
        }
    });
    this.handleLoad();
  };
  
  $.fn.countTo.defaults = {
    from: 0,  // the number the element should start at
    to: 100,  // the number the element should end at
    speed: 1000,  // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,  // the number of decimal places to show
    onUpdate: null,  // callback method for every time the element is updated,
    onComplete: null,  // callback method for when the element finishes updating
  };
  })(jQuery);
  
  jQuery(function($) {
    $('.speedplus').countTo({
        from: 0,
        to: spdvalue,
        speed: 150,
        refreshInterval: 1,
        onComplete: function(value) {
            console.debug(this);
        }
    });
  });
  /*Counter End*/			
 }
  
  render() {
    return (
      <div>
      <div id="speed-gauge">
      <div className="gauge">
        <div className="slice" />
        <div className="slice" />
        <div className="slice" />
        <div className="slice" />
        <div className="slice" />
        <div className="slice" />
        <div className="slice" />
        <div className="slice" />   
        <div className="slice" />   
        <div className="subslice" /> 
        <div className="subslice" /> 
        <div className="subslice" /> 
        <div className="subslice" /> 
        <div className="subslice" /> 
        <div className="subslice" /> 
        <div className="subslice" /> 
        <div className="subslice" /> 
        <div className="rpm">0</div>
        <div className="rpm">1</div>
        <div className="rpm">2</div>
        <div className="rpm">3</div>
        <div className="rpm">4</div>
        <div className="rpm">5</div>
        <div className="rpm">6</div>
        <div className="rpm">7</div>
        <div className="rpm">8</div>
        {/*RPM Slice*/}
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSlice" />
        <div className="rpmSpeed">0</div>
        <div className="rpmSpeed"></div>
        <div className="rpmSpeed">20</div>
        <div className="rpmSpeed"></div>
        <div className="rpmSpeed">40</div>
        <div className="rpmSpeed"></div>
        <div className="rpmSpeed">60</div>
        <div className="rpmSpeed"></div>
        <div className="rpmSpeed">80</div>
        <div className="rpmSpeed"></div>
        <div className="rpmSpeed">100</div>
        <div className="rpmSpeed"></div>
        <div className="rpmSpeed">120</div>
        <div className="rpmSpeed"></div>
        <div className="rpmSpeed">140</div>
        <div className="rpmSpeed"></div>
        <div className="rpmSpeed">160</div>
        <div className="rpmSpeed">km/h</div>
        <div id="sui" />
        <div id="SUICIRCLE" className="suiCircle" />
        <div className="bottomStroke">

          <div style={{position: 'absolute', left: '42%', top: '40%'}}>
          <div className="speedplus">0</div>
          </div>
        </div>
        <div className="gauge-circle-1" />
      </div>
    </div>
    <div id style={{height: '100px', width: '200px', margin: 'auto', marginTop: '20px'}}>
      <input type="text" style={{width: '90px'}} placeholder="Speed in Km/h" id="Give" />
      <button id="SpeedCheck" className="btn-group-lg">Check Speed</button>
    </div>
      </div>
    )
  }
}
export default SpeedoMeter;