import test from 'ava';

import WebclientIndex from '../../../lib/webclient';

test.beforeEach((t) => {
  const mockWebWorker = new MockWebWorker('foo');
  t.context.mockWebWorker = mockWebWorker;
  t.context.webApiClient = WebclientIndex.initializeWebworkerAPI(mockWebWorker);
});

test('WebclientIndex: reset should reset ID', (t) => {
  const webApiClient = t.context.webApiClient;
  webApiClient.id = 200;
  webApiClient.reset();
  t.is(webApiClient.id, 100);
});

test('WebclientIndex: getStatistics', (t) => {
  const webApiClient = t.context.webApiClient;
  const result = webApiClient.getStatistics();
  t.deepEqual(result, {
    averageRTTms: 0,
    sentMessages: 0,
    failedMessages: 0,
  });
});

[
  { command: 'initializeEmulator', requestIdInAnswer: true },
  { command: 'resetEmulator', requestIdInAnswer: true },
  { command: 'setCabinetInput', requestIdInAnswer: true },
  { command: 'setSwitchInput', requestIdInAnswer: true },
  { command: 'setFliptronicsInput', requestIdInAnswer: true },
  { command: 'toggleMidnightMadnessMode', requestIdInAnswer: true },
  { command: 'getVersion', requestIdInAnswer: false },
  { command: 'getEmulatorRomName', requestIdInAnswer: false },
  { command: 'getEmulatorState', requestIdInAnswer: false },
  { command: 'setEmulatorState', requestIdInAnswer: true },
  { command: 'setDipSwitchByte', requestIdInAnswer: true },
  { command: 'getDipSwitchByte', requestIdInAnswer: false },
  { command: 'registerAudioConsumer', requestIdInAnswer: true },
  { command: 'pauseEmulator', requestIdInAnswer: true },
  { command: 'resumeEmulator', requestIdInAnswer: true },
  { command: 'writeMemory', requestIdInAnswer: true },
].forEach((cmd) => {
  test('WebclientIndex: rpc ' + cmd.command, (t) => {
    const webApiClient = t.context.webApiClient;

    return webApiClient[cmd.command]()
      .then((result) => {
        if (cmd.requestIdInAnswer) {
          t.is(result.requestId, 101);
        } else {
          t.is(result, 'parameter');
        }
      });
  });
});

class MockWebWorker {
  constructor(filename) {
    this.filename = filename;
  }

  onmessageerror() {

  }

  postMessage(message) {
    // delay answer, else listener service is not ready
    this.onmessage({
      data: {
        requestId: message[0], parameter: 'parameter'
      },
    });
  }
}
