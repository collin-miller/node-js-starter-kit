import CaptureStdout from "capture-stdout";
import HelloWorld from "./helloWorld";
import logger from "./logger";

test("Is a useless and basic test", () => {
  expect.assertions(1);
  const msg = "Test Message";
  const helloWorld = new HelloWorld({ message: msg, logger });
  const captureStdout = new CaptureStdout();
  captureStdout.startCapture();
  helloWorld.writeToLog();
  captureStdout.stopCapture();
  expect(captureStdout.getCapturedText()[0]).toContain(helloWorld.message);
});
