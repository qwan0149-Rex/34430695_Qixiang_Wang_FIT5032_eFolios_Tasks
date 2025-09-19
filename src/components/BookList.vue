<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <h2 class="h5 m-0">Book List (isbn > 1000)</h2>
      <button class="btn btn-sm btn-outline-secondary" @click="loadBooks">Refresh</button>
    </div>

    <ul class="list-group mt-3" v-if="books.length">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="b in books"
        :key="b.id"
      >
        <div>
          <strong>{{ b.name }}</strong>
          <span class="text-muted"> (ISBN: {{ b.isbn }})</span>
        </div>
        <div class="btn-group btn-group-sm">
          <button class="btn btn-outline-primary" @click="rename(b)">Update</button>
          <button class="btn btn-outline-danger" @click="remove(b)">Delete</button>
        </div>
      </li>
    </ul>

    <p v-else class="text-muted mt-3">No records (try adding or lower the filter).</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'

import db from '../firebase/init.js'

export default {
  setup() {
    const books = ref([])

    const loadBooks = async () => {
      const q = query(
        collection(db, 'books'),
        where('isbn', '<=', 1000),
        orderBy('isbn', 'asc'),
        limit(20),
      )
      const snap = await getDocs(q)
      books.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    }

    const rename = async (b) => {
      const newName = prompt('New name for: ' + b.name, b.name)
      if (!newName || newName === b.name) return
      await updateDoc(doc(db, 'books', b.id), { name: newName })
      await loadBooks()
    }

    const remove = async (b) => {
      if (!confirm('Delete "' + b.name + '" ?')) return
      await deleteDoc(doc(db, 'books', b.id))
      await loadBooks()
    }

    onMounted(loadBooks)
    return { books, loadBooks, rename, remove }
  },
}
</script>
