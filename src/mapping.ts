import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, NewRsTx } from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleNewRsTx(event: NewRsTx): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let entity = ExampleEntity.load(id)

  if (entity == null) {
    entity = new ExampleEntity(id)
  }

  entity.noncePointX = event.params.noncePointX
  entity.noncePointY = event.params.noncePointY

  entity.save()
}
