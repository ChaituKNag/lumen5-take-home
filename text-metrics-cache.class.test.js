import TextMetricsCache from './text-metrics-cache.class';
import TextMetrics from './text-metrics.class';
import measureText from './utils/measure-text';

const cache = new TextMetricsCache();

const times = (count, fn) => {
    for(let i = 0; i < count; i++) {
        fn();
    }
};

beforeEach(() => {
    const tm1 = measureText('one', '32px Arial');
    const tm2 = measureText('two', '16px Calibri');
    const tm3 = measureText('three', '8px Verdana');
    const tm4 = measureText('four', '64px Comic Sans');
    const tm5 = measureText('five', '32px Source Sans Pro');
    cache.setCachedEntry('one', '32px Arial', tm1);
    cache.setCachedEntry('two', '16px Calibri', tm2);
    cache.setCachedEntry('three', '8px Verdana', tm3);
    cache.setCachedEntry('four', '64px Comic Sans', tm4);
    cache.setCachedEntry('five', '32px Source Sans Pro', tm5);
});

test("TextMetricsCache.class instantiation", () => {
    expect(cache.cacheData).toBeInstanceOf(Map);
    expect(cache.accessCount).toBeInstanceOf(Map);
    expect(cache.getCachedEntry).toBeDefined();
    expect(cache.setCachedEntry).toBeDefined();
    expect(cache.evictEntries).toBeDefined();
});

test("TextMetricsCache.class getCachedEntry", () => {

    expect(cache.accessCount.size).toEqual(5);
    expect(cache.cacheData.size).toEqual(5);

    const textMetrics = cache.getCachedEntry('one', '32px Arial');
    
    expect(textMetrics).toBeInstanceOf(TextMetrics);
    expect(cache.accessCount.get('one32px Arial')).toEqual(1);

    times(4, () => cache.getCachedEntry('one', '32px Arial'));
    
    expect(cache.accessCount.get('one32px Arial')).toEqual(5);
})

test("TextMetricsCache.class evictEntries", () => {
    
    times(10, () => cache.getCachedEntry('one', '32px Arial'));
    times(1, () => cache.getCachedEntry('two', '16px Calibri'));
    times(5, () => cache.getCachedEntry('three', '8px Verdana'));
    times(3, () => cache.getCachedEntry('four', '64px Comic Sans'));
    times(7, () => cache.getCachedEntry('five', '32px Source Sans Pro'));

    expect(cache.accessCount.get('four64px Comic Sans')).toEqual(3);
    expect(cache.evictEntries(2)).toBeTruthy();
    expect(cache.accessCount.get('one32px Arial')).toBeDefined();
    expect(cache.accessCount.get('four64px Comic Sans')).not.toBeDefined();
    expect(cache.accessCount.size).toEqual(3);
})