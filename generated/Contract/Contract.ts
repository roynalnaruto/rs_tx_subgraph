// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class NewRsTx extends EthereumEvent {
  get params(): NewRsTx__Params {
    return new NewRsTx__Params(this);
  }
}

export class NewRsTx__Params {
  _event: NewRsTx;

  constructor(event: NewRsTx) {
    this._event = event;
  }

  get noncePointX(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get noncePointY(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }
}

export class RsTxCall extends EthereumCall {
  get inputs(): RsTxCall__Inputs {
    return new RsTxCall__Inputs(this);
  }

  get outputs(): RsTxCall__Outputs {
    return new RsTxCall__Outputs(this);
  }
}

export class RsTxCall__Inputs {
  _call: RsTxCall;

  constructor(call: RsTxCall) {
    this._call = call;
  }

  get noncePointX(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get noncePointY(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RsTxCall__Outputs {
  _call: RsTxCall;

  constructor(call: RsTxCall) {
    this._call = call;
  }
}
