class Info{
    logging(msg){
        console.info(msg)
    }
}
class Warn{
    logging(msg){
        console.warn(msg)
    }
}
class Error{
    logging(msg){
        console.error(msg)
    }
}
class Table{
    logging(msg){
        console.table(msg)
    }
}
class Strategy{
    strategy=null;
    setStrategy(typeStrategy){
        this.typeStrategy=typeStrategy;
    }
    logging(msg){
        this.typeStrategy.logging(msg)
    }

}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);