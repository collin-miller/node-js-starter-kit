import logger from './logger';
import HelloWorld from './helloWorld';

const helloWorld = new HelloWorld({ message: 'Hey there!', logger });

helloWorld.writeToLog();
