var Toggle = {
  init: function() {
    var toggles = document.querySelectorAll('.toggle');
    for(var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', function(e) {
        e.preventDefault();
        var targetSelector = this.getAttribute('data-target');
        var targetDisplayOn = this.getAttribute('data-on');
        var targetDisplayOff = this.getAttribute('data-off');
        var accordeonGroupName = this.getAttribute('data-accordeon');
        var accordeonMembers = document.querySelectorAll('[data-accordeon-group="' + accordeonGroupName + '"]');
        for(var j = 0; j < accordeonMembers.length; j++) {
          accordeonMembers[j].style.display = targetDisplayOff;
        }
        var targets = document.querySelectorAll(targetSelector);
        for(var k = 0; k < targets.length; k++) {
          var currentDisplay = window.getComputedStyle(targets[k]).display;
          console.log('current: ' + currentDisplay);
          if(currentDisplay == targetDisplayOff) {
            targets[k].style.display = targetDisplayOn;
          } else {
            targets[k].style.display = targetDisplayOff;
          }
        }
      });
    }
  }
};
