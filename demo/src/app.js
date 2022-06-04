/**
 * Created by Rick on 2022-06-04.
 */
'use strict';
import EventBus from 'eventbus';

const eventBus = new EventBus();

// Subscribe to eventX
eventBus.subscribe('eventX', (obj,num) => {
  console.log("Module A", obj, num);
});
eventBus.subscribe('eventX', (obj,num) => {
  console.log("Module B", obj, num);
});
eventBus.subscribe('eventX', (obj,num) => {
  console.log("Module C", obj, num);
});

// publish event eventX
eventBus.publish('eventX', {msg: 'EventX published'}, 1);

// clear
eventBus.clear('eventX');

// Publish the event eventX again, since it has been cleared, all modules will no
//   longer receive the message
eventBus.publish('eventX', {msg: 'EventX published again'}, 2);