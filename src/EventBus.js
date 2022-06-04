/**
 * Created by Rick on 2022-05-26.
 */
'use strict';
class EventBusEvent extends Event {
  constructor(type, data) {
    super(type);
    this.data = data;
  }
}

class EventBus extends EventTarget {
  static getInstance(){
    if(!this._instance) this._instance = new EventBus();
    return this._instance;
  }

  emit(type, data) {
    this.dispatchEvent(new EventBusEvent(type, data));
  }
}

export default EventBus.getInstance();