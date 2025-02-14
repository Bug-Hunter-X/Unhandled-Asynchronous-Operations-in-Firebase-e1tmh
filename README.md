# Unhandled Asynchronous Operations in Firebase

This example demonstrates a common error in Firebase: attempting to access data before an asynchronous operation completes.

## Problem

The code attempts to access data from a Firebase document before the `getDoc` operation has finished. This results in `doc.data()` being undefined, causing unexpected behavior.

## Solution

The solution involves ensuring that data access occurs only after the asynchronous `getDoc` operation resolves successfully.  This is done by handling the result within the `.then` block.