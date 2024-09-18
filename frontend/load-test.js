import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 20 }, // Monte jusqu'à 20 utilisateurs en 30 secondes
    { duration: '1m', target: 20 },  // Maintient 20 utilisateurs pendant 1 minute
    { duration: '10s', target: 0 },  // Descend à 0 utilisateur en 10 secondes
  ],
};

export default function () {
  let res = http.get('http://localhost:8000/calculator');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}