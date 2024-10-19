import os from 'os';

// Obtener información sobre el sistema operativo
const osType = os.type();
const osPlatform = os.platform();
const osRelease = os.release();
const osArchitecture = os.arch();

console.log('Tipo de sistema operativo:', osType);
console.log('Plataforma del sistema operativo:', osPlatform);
console.log('Versión del sistema operativo:', osRelease);
console.log('Arquitectura del sistema operativo:', osArchitecture);

// Obtener información de la memoria
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log('Memoria total (en bytes):', totalMemory);
console.log('Memoria libre (en bytes):', freeMemory);
