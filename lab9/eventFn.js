class Subject{
    constructor(){
        this.observers={}
}
    on(event,fn){
        if (!this.observers[event]){
            this.observers[event]=[fn]
        }else{
            this.observers[event].push(fn)
        }
    }
    emit(event,messages){
        if(this.observers[event]){
            this.observers[event].forEach(fn=> fn(messages))
        }

    }
}

const subject = new Subject();
subject.on('eat', console.log); 
subject.on('study', console.log); 

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');

subject.emit('study', 'cs445');


