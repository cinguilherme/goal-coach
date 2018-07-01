import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBZV8bPGwXnoKdYv0JCUARkW1Fkmc_Hca4",
    authDomain: "goal-coach-f0823.firebaseapp.com",
    databaseURL: "https://goal-coach-f0823.firebaseio.com",
    projectId: "goal-coach-f0823",
    storageBucket: "",
    messagingSenderId: "953626366288"
};

export const firebaseapp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');
export const completedGoalRef = firebase.database().ref('completed_goals');