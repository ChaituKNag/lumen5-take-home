class TextMetricsCache {
  constructor() {
    // your data structure is stored in this.cacheData
    this.cacheData = new Map();

    // if you need any other class variables,
    // you can add them here:
    this.accessCount = new Map();
  }

  getCachedEntry(word, font) {
    // please write the code to look up and return the stored
    // TextMetrics, if it exists in the cache, for the input
    // word and font strings.
    let count = this.accessCount.get(word + font);
    this.accessCount.set(word + font, ++count);
    return this.cacheData.get(word + font);
  }

  setCachedEntry(word, font, textMetricsData) {
    // please write the code to store the textMetricsData
    // which corresponds to the  input word and font strings
    this.cacheData.set(word + font, textMetricsData);
    this.accessCount.set(word + font, 0);
  }

  /**
   * This method will be called when there are too many entries
   * in the cache and we need to evict some of them.
   *
   * @param {integer} numEntriesToEvict - the number of entries that need
   *                                      to be evicted from this.cacheData
   */
  evictEntries(numEntriesToEvict) {
    // Please write the code to choose entries to evict and evict them,
    // according to the strategy/data structure you chose in Question 2.
    if(this.accessCount.size < numEntriesToEvict) return false;

    // find entries that are most used.
    const toDelete = Array.from(
        this.accessCount.entries()
    ).sort((a, b) => a[1] - b[1]).slice(0, numEntriesToEvict);

    // clear the least accessed keys.
    toDelete.forEach(([key]) => {
        this.accessCount.delete(key);
        this.cacheData.delete(key);
    });

    return true;
  }
}

export default TextMetricsCache;
