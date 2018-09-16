import alt from '../../alt';
import AlertActions from './../actions/AlertActions';

class AlertStore {
    constructor() {
        this.alerts = [
            { "id": 1, "content": "Need to goto School","isComplete":false },
            { "id": 2, "content": "Complete Your Home Work","isComplete":false },
            { "id": 3, "content": "Go Home At 3.00 Am","isComplete":false }
        ];
        this.isComplete = false;
        id = 4;

        this.bindListeners({
            handleAddAlerts: AlertActions.ADD_ALERT,
            handleCompleteAlerts: AlertActions.COMPLETE_ALERT,
            handleDeleteAlerts: AlertActions.DELETE_ALERT,
            handleUpdateAlert: AlertActions.UPDATE_ALERT,

        });
    }
    handleAddAlerts(alert) {
        this.alerts.push(
            {
                "id": id++,
                "content": alert,
            })
        console.log(alert)
    }
    handleCompleteAlerts(id){
    
        foundindex  = this.alerts.findIndex(x => x.id == id);
        if( this.alerts[foundindex].isComplete){
             this.alerts[foundindex].isComplete = false;
        }
        else{
             this.alerts[foundindex].isComplete   = true;
        }
      
        console.log(id)
    }

    handleDeleteAlerts(id){
        console.log("delete Alert")
        newAlerts = this.alerts.filter(x => x.id != id);
        console.log(newAlerts)
        this.alerts = newAlerts;
    }

    handleUpdateAlert(id,content){
        console.log('update Alert');
        foundindex  = this.alerts.findIndex(x => x.id == id);
          this.alerts[foundindex].content = content;
    }

}

module.exports = alt.createStore(AlertStore, 'AlertStore')