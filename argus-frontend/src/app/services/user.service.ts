import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlGet = 'getUsers';
  private urlPost = 'saveUser';
  private urlUpdate = 'updateUser';
  private urlDelete = 'deleteUser';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/${this.urlGet}`);
  }

  public updateUser(user: User): Observable<User[]> {
    return this.http.put<User[]>(`${environment.apiUrl}/${this.urlUpdate}`, user);
  }

  public createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${environment.apiUrl}/${this.urlPost}`, user);
  }

  public deleteUser(user: User): Observable<User[]> {
    return this.http.delete<User[]>(`${environment.apiUrl}/${this.urlDelete}/${user.id}`);
  }
}
