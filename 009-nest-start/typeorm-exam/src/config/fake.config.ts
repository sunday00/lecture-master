export class FakeConfig {
  CAN_SHOOT = true;
  ENV = process.env.NODE_ENV;
}

export default () => ({
  fake: new FakeConfig(),
});
