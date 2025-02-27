/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { TestLibrary } from "./TestLibrary";

export class TestLibraryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<TestLibrary> {
    return super.deploy(overrides) as Promise<TestLibrary>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): TestLibrary {
    return super.attach(address) as TestLibrary;
  }
  connect(signer: Signer): TestLibraryFactory {
    return super.connect(signer) as TestLibraryFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TestLibrary {
    return new Contract(address, _abi, signerOrProvider) as TestLibrary;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_val",
        type: "uint256",
      },
    ],
    name: "enhanceVal",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c661002f600b82828239805160001a6073146000811461001f57610021565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600436106056576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063b7203ec614605b575b600080fd5b607760048036038101908080359060200190929190505050608d565b6040518082815260200191505060405180910390f35b6000602a820190509190505600a165627a7a72305820340bdb319dc57d1f8aabdb56fcf44274b4abd844b67b8cb2f9759bef51ffb14a0029";
