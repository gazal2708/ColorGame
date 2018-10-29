# -*- coding: utf-8 -*-
"""
Created on Tue Jul 17 22:56:22 2018

@author: charc
"""

import cv2

def main():
    j = 0
    for file in dir(cv2):
        if file.startswith('COLOR_'):
            print(file)
            j +=1
    
    print("there are " + str((j+1)) + ' color conversion flag in cv2')        
if __name__ == "__main__":
    main()
    
    