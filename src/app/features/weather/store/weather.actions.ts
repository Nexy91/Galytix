export class GetWeather {
  public static readonly type: string = '[GetWeather] Get weather';
  constructor(public country: string) {}
}
