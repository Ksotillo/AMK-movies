export interface ApiResponseArray<T> {
    page: number;
    results: T[];
    total_results: number;
    total_pages: number;
}