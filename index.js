class QueryStringBuilder {
    constructor() {
        this.params = {};
    }

    // Adds or updates a query parameter
    setParam(key, value) {
        if (value !== null && value !== undefined) {
            this.params[key] = value;
        }
        return this; // Enable chaining
    }

    // Removes a query parameter
    removeParam(key) {
        delete this.params[key];
        return this; // Enable chaining
    }

    // Converts the parameters to a query string
    build() {
        const queryParts = [];
        for (const [key, value] of Object.entries(this.params)) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(value);
            queryParts.push(`${encodedKey}=${encodedValue}`);
        }
        return queryParts.length > 0 ? '?' + queryParts.join('&') : '';
    }

    // Static method to build a query string from an object directly
    static fromObject(params) {
        const builder = new QueryStringBuilder();
        for (const [key, value] of Object.entries(params)) {
            builder.setParam(key, value);
        }
        return builder.build();
    }
}

module.exports = QueryStringBuilder;