## 1. What are some of the different strategies that you could use to evict data from the cache to prevent it from growing indefinitely? When would each strategy be most effective?

1. Remove least used entries: When items in the cache are being used, we can update a property in the item to indicate how many times it is requested from cache. Based on that, when the eviction of cache is requested, we can find out which are least used and remove them and keep the highest used entries. This is useful when the cache itself is used irregularly but when used, some items are accessed more than other items.
2. Remove by access of entries: When items in the cache are being accessed/used, we can update a time stamp to indicate the most recent accessed time. Based on that, when eviction is requested, we can find out items which are not accessed recently and remove them. This is especially useful when items are accessed at different rates but the cache itself is used fairly regularly.
3. Order of insertion: We can delete items based on their insertion. So when an eviction is requested, we can deleted the entries inserted previously and keep the latest entries. This strategy is effective if we know that new entries are constantly getting added into cache which are unique and have fairly equal number of accesses over time or accessed fairly regularly over time.

## 2. Choose one of your strategies from Question 1. Write out the data structure that you would use to implement this cache. Why did you choose this data structure?

I have implemented the strategy 1 mentioned above which is is removing items based on least usage. 
1. In order to store the text-metrics data, we are using a modern JavaScript collection called Map.
2. To maintain the number of times an entry is accessed, we are using another Map object.
3. Entries are accessed by a unique key generated based on the word and font strings.
4. Map is used over the common object literals because Maps maintain the order of insertion, so at a later point if we want to extend the functionality to also consider the order of insertion to formulate a hybrid strategy while evicting.

## 3. Write the method that evicts entries from the cache, as well as the method to get a cache entry and set a cache entry:

Please find the updated code in the enclosed files.

## 4. Describe the various things that you would test to make sure that evictEntries is working correctly. Then, write the code for one of these test cases.

I would write an integration test for the TextMetrisCache class for its methods, testing all the features.

    Testing the following:
    1. Weather the data structures of Map
    2. Weather the class methods are defined
    3. Weather getCachedEntry returns the TextMetrics object
    4. After setting multiple TextMetrics objects in the cache, weather the count matches expected.
    5. After running getCachedEntry multiple times, weather the count in the cache matches expected.
    6. After running evictEntries method, weather size of the cache matches expected.
    7. After running evictEntries method, weather expected entries are deleted properly.

I would also write a unit test for the TextMetrics class for various functionality of the context object.

    Testing the following:
    1. After mocking the context.fillText function, test if that function is called only once.
    2. Check if all the methods called in the constructor function are called exactly once.
    3. Check if values set through mocking the _calculate* methods are matching the instance properties width, ascenderHeight and descenderHeight.

I would write the an integration test for the measure-text utility method.
    
    Testing the following:
    1. After running the measureText function, weather the returned object is defined.
    2. Weather the returned object is an instance of TextMetrics.

Please find the updated code in the enclosed code-files.