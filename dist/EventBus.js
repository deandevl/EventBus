(()=>{"use strict";class t extends Event{constructor(t,s){super(t),this.data=s}}class s extends EventTarget{static getInstance(){return this._instance||(this._instance=new s),this._instance}emit(s,e){this.dispatchEvent(new t(s,e))}}s.getInstance()})();
//# sourceMappingURL=EventBus.js.map
