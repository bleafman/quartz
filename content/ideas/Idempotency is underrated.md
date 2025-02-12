---
title: Idempotency is underrated
draft: "false"
tags:
  - programming
  - webdev
---
While not a cure-all, there are entire classes of problems that just go away in webdev if create and updates are idempotent.

Why? Idempontency let's you default to just send it again.

Your bulk update failed halfway through? Send it again.

The integration sync for the customer's data failed half through? Send it again.

Your queue processors died and your not sure what jobs were actually completed? Send them again!

Notice that a lot these issues really all that problematic for basic CRUD, which is likely why idepotency is underrated.

It also isn't free. You need to come up with an idempotency key and there aren't always natural keys.

When a natural key exists though, you can avoid all sorts of bugs and additional business logic.
