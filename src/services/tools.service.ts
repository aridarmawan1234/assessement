import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }
}

export function Loading(message: string) {
  var $loading = $(
    `<div id="show-loading" class="loading-container">
      <center>
        <div class="loading-position">
          <div class="container">
            <div class="loader-wrapper">
              <div class="loader">
                <div class="loader loader-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <p class="text-white loading-massage"></p>
      </center>
     </div>`
  );

  if (typeof message === 'undefined') {
    message = '';
  }
  $loading.find('.loading-massage').html(message);
  $loading.appendTo('body');
}

export function hideLoading() {
  var $layer: any = document.getElementsByClassName('loading-container')[0];
  if ($layer) $layer.remove();
}

export const saveItem = (key: string, data: string) => {
  const serializedState = data;
  localStorage.setItem(key, serializedState);
};

export const getItemByKey = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const deleteItemByKey = (key: string) => localStorage.setItem(key, '');

export const clearStorage = () => localStorage.clear();
