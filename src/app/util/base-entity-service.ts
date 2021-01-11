import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from './page';

export interface Entity {
  id: number;
}

export class BaseEntityService<T extends Entity> {

  constructor(protected http: HttpClient, protected API_URL: string) { }

  public findAll(page: number = 0, size: number = 5): Observable<Page<T>> {
    const params = {
      'page': `${page}`,
      'size': `${size}`
    };
    return this.http.get<Page<T>>(this.API_URL, { params });
  }

  public findById(id: number): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${id}`);
  }

  public save(entity: T): Observable<T> {
    if (entity.id != null) return this.update(entity);
    return this.http.post<T>(this.API_URL, entity);
  }

  protected update(entity: T): Observable<T> {
    return this.http.put<T>(`${this.API_URL}/${entity.id}`, entity);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
