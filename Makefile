.PHONY: default tests open build

default:
	@echo "run make [open|tests|build]"

open:
	open http://localhost:8000/
	python -m SimpleHTTPServer 8000

tests:
	rm tests/jasmine/src/*
	cp src/* tests/jasmine/src/
	open tests/jasmine/SpecRunner.html
