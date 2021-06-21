export const TRAVEL = 'travel';

export class GetTravel {
  constructor() {
    console.log('wwwww weqwejhqdqabwfbahfhbwe');
  }
  static readonly type = type('Get travels');
}

function type(action: string) {
  return `[${TRAVEL}] ${action}`;
}
