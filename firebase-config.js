<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBoYm2uByaFArFA6WSZ7STfpoU-BJN1Ntk",
    authDomain: "hamkannur-fc24a.firebaseapp.com",
    projectId: "hamkannur-fc24a",
    storageBucket: "hamkannur-fc24a.firebasestorage.app",
    messagingSenderId: "132157476942",
    appId: "1:132157476942:web:6c125e7a5930d99ab0f31f",
    measurementId: "G-LQJYPGSB38"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
