import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, NewRsTx } from "../generated/Contract/Contract"
import { Transaction } from "../generated/schema"

export function handleNewRsTx(event: NewRsTx): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let entity = Transaction.load(id)

  if (entity == null) {
    entity = new Transaction(id)
  }

  entity.noncePoint = event.params.noncePoint
  entity.encryptedRecipient = event.params.encryptedRecipient

  entity.save()
}
