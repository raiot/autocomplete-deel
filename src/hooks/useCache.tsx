export function useCache(strategy: CacheStrategy) {
    const storage = strategy === 'local' ? localStorage : sessionStorage;
    return {
        get(key: string) {
            const data = storage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
            return null;
        },
        set(key: string, value: IPokemonApiResponse) {
            storage.setItem(key, JSON.stringify(value));
        },
        remove(key: string) {
            storage.removeItem(key);
        },
    };
}